import datetime

import cv2
import time

import tensorflow as tf
import mediapipe as mp
import numpy as np
from django.core.files.base import ContentFile

from account.models import AuthUser
from cctv.models import Detect, Alarm

mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
mp_pose = mp.solutions.pose

class FallDownDetector():
    def __init__(self, username):
        self.username = username

        self.model = tf.keras.models.load_model('cctv/data/human_skeleton_act-99-0.92.hdf5')
        self.pose = mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5)

        self.sequence = []

        self.threshold = 0.8

        # 탐지 시간
        self.detect_falldown_time = time.time()

    def detect_falldown(self, frame, camid):
        copy_frame = frame.copy()
        # Make detections
        image, results = self.mediapipe_detection(frame, self.pose)
        # print(results)

        # 2. Prediction logic
        keypoints = self.extract_keypoints(results)
        #         sequence.insert(0,keypoints)
        #         sequence = sequence[:30]
        self.sequence.append(keypoints)
        self.sequence = self.sequence[-100:]

        text = 'no'
        if len(self.sequence) == 100:
            res = self.model.predict(np.expand_dims(self.sequence, axis=0))[0]
            # text= LABEL_INT_DICT[np.argmax(res)]
            text = str(np.argmax(res))
            if text=='2' and time.time()-self.detect_falldown_time>10:
                detectModel = Detect()

                ret1, frame1 = cv2.imencode('.jpg', frame)
                ret2, frame2 = cv2.imencode('.jpg', copy_frame)
                user = AuthUser.objects.get(username=self.username)
                ts = time.time()
                timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')

                detectModel.uid = user
                file1 = ContentFile(frame1)
                file2 = ContentFile(frame2)
                file1.name = 'falldown_' + timestamp + '_1' + '.jpg'
                file2.name = 'falldown_' + timestamp + '_2' + '.jpg'
                detectModel.image1 = file1
                detectModel.image2 = file2
                detectModel.time = timestamp
                detectModel.camid = camid
                detectModel.type = 'FALLDOWN'
                detectModel.save()

                alarm = Alarm()
                alarm.uid = user
                alarm.did = detectModel
                alarm.camid = camid
                alarm.time = timestamp
                alarm.confirm = 0
                alarm.type = 'FALLDOWN'
                alarm.save()

                self.detect_falldown_time = time.time()

        print(text)
        # 3. Viz logic
        self.draw_styled_landmarks(image, results)

        # cv2.rectangle(image, (0,0), (640, 40), (245, 117, 16), -1)
        cv2.putText(image, ' val =  ' + (text), (3, 30),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)

        return image



    def extract_keypoints(self, results):
        pose = np.array([[res.x, res.y, res.z, res.visibility] for res in
                         results.pose_landmarks.landmark]).flatten() if results.pose_landmarks else np.zeros(33 * 4)
        return pose

    def mediapipe_detection(self, image, model):
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # COLOR CONVERSION BGR 2 RGB
        image.flags.writeable = False  # Image is no longer writeable

        results = model.process(image)  # Make prediction
        image.flags.writeable = True  # Image is now writeable
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)  # COLOR COVERSION RGB 2 BGR

        return image, results

    def draw_styled_landmarks(self, image, results):
        # Draw pose connections
        mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS,
                                  mp_drawing.DrawingSpec(color=(80, 22, 10), thickness=2, circle_radius=4),
                                  mp_drawing.DrawingSpec(color=(80, 44, 121), thickness=2, circle_radius=2)
                                  )