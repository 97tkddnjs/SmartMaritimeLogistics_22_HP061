import datetime

from django.core.files.base import ContentFile

from account.models import AuthUser

import cv2
import numpy as np
import time

from cctv.models import Detect, Alarm


class HelmetDetector():
    def __init__(self, username):
        self.username = username
        self.net = cv2.dnn.readNet("cctv/data/yolov4-tiny.weights",
                                   "cctv/data/yolov4-tiny.cfg")
        self.net_helmet = cv2.dnn.readNet("cctv/data/yolov3-obj_2400.weights",
                                          "cctv/data/yolov3-obj.cfg")
        self.classes = ["person"]
        self.classes_helmet = ["helmet"]

        # YOLO 네트워크 불러오기
        self.layer_names = self.net.getLayerNames()
        self.layer_names_helmet = self.net_helmet.getLayerNames()

        self.output_layers = [self.layer_names[i - 1] for i in self.net.getUnconnectedOutLayers()]
        self.output_layers_helmet = [self.layer_names_helmet[i - 1] for i in
                                     self.net_helmet.getUnconnectedOutLayers()]

        # 클래스의 갯수만큼 랜덤 RGB 배열을 생성
        self.colors = np.random.uniform(0, 255, size=(len(self.classes), 3))
        self.colors_helmet = np.random.uniform(0, 255, size=(len(self.classes_helmet), 3))

        # 탐지 시간
        self.detect_helmet_time = time.time()

    def detect_helmet(self, frame, size, score_threshold, nms_threshold, camid):
        if time.time() - self.detect_helmet_time < 10:
            return;
        copy_frame = frame.copy()
        draw_frame = frame.copy()
        height, width, channels = frame.shape

        blob = cv2.dnn.blobFromImage(frame, 0.00392, (size, size), (0, 0, 0), True, crop=False)
        self.net.setInput(blob)
        outs = self.net.forward(self.output_layers)
        class_ids = []
        confidences = []
        boxes = []
        for out in outs:
            for detection in out:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                if not (class_id == 0 or class_id == 15 or class_id == 16):
                    continue
                if confidence > 0.1:
                    center_x = int(detection[0] * width)
                    center_y = int(detection[1] * height)
                    w = int(detection[2] * width)
                    h = int(detection[3] * height)
                    x = int(center_x - w / 2)
                    y = int(center_y - h / 2)
                    boxes.append([x, y, w, h])
                    confidences.append(float(confidence))
                    class_ids.append(class_id)
        indexes = cv2.dnn.NMSBoxes(boxes, confidences, score_threshold=score_threshold, nms_threshold=nms_threshold)
        detect_person_cnt = 0
        for i in range(len(boxes)):
            if i in indexes:
                x, y, w, h = boxes[i]
                class_name = self.classes[class_ids[i]]
                label = f"{class_name} {confidences[i]:.2f}"
                color = self.colors[class_ids[i]]
                cv2.rectangle(draw_frame, (x, y), (x + w, y + h), color, 2)
                cv2.rectangle(draw_frame, (x - 1, y), (x + len(class_name) * 13 + 65, y - 25), color, -1)
                cv2.putText(draw_frame, label, (x, y - 8), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1, (0, 0, 0), 2)
                if class_name == 'person':
                    detect_person_cnt += 1

        blob = cv2.dnn.blobFromImage(frame, 0.00392, (size, size), (0, 0, 0), True, crop=False)
        self.net_helmet.setInput(blob)
        outs = self.net_helmet.forward(self.output_layers_helmet)
        class_ids = []
        confidences = []
        boxes = []
        for out in outs:
            for detection in out:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                if not (class_id == 0 or class_id == 15 or class_id == 16):
                    continue
                if confidence > 0.1:
                    center_x = int(detection[0] * width)
                    center_y = int(detection[1] * height)
                    w = int(detection[2] * width)
                    h = int(detection[3] * height)
                    x = int(center_x - w / 2)
                    y = int(center_y - h / 2)
                    boxes.append([x, y, w, h])
                    confidences.append(float(confidence))
                    class_ids.append(class_id)
        indexes = cv2.dnn.NMSBoxes(boxes, confidences, score_threshold=score_threshold, nms_threshold=nms_threshold)
        detect_helmet_cnt = 0
        for i in range(len(boxes)):
            if i in indexes:
                x, y, w, h = boxes[i]
                class_name = self.classes_helmet[class_ids[i]]
                label = f"{class_name} {confidences[i]:.2f}"
                color = self.colors_helmet[class_ids[i]]
                cv2.rectangle(draw_frame, (x, y), (x + w, y + h), color, 2)
                cv2.rectangle(draw_frame, (x - 1, y), (x + len(class_name) * 13 + 65, y - 25), color, -1)
                cv2.putText(draw_frame, label, (x, y - 8), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1, (0, 0, 0), 2)
                if class_name == 'helmet':
                    detect_helmet_cnt += 1

        if time.time() - self.detect_helmet_time > 10 and detect_person_cnt > 0 and detect_person_cnt > detect_helmet_cnt:
            detectModel = Detect()

            ret1, frame1 = cv2.imencode('.jpg', draw_frame)
            ret2, frame2 = cv2.imencode('.jpg', copy_frame)
            user = AuthUser.objects.get(username=self.username)
            ts = time.time()
            timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')

            detectModel.uid = user
            file1 = ContentFile(frame1)
            file2 = ContentFile(frame2)
            file1.name = 'helmet_' + timestamp + '_1' + '.jpg'
            file2.name = 'helmet_' + timestamp + '_2' + '.jpg'
            detectModel.image1 = file1
            detectModel.image2 = file2
            detectModel.time = timestamp
            detectModel.camid = camid
            detectModel.type = 'HELMET'
            detectModel.save()

            alarm = Alarm()
            alarm.uid = user
            alarm.did = detectModel
            alarm.camid = camid
            alarm.time = timestamp
            alarm.confirm = 0
            alarm.type = 'HELMET'
            alarm.save()

            self.detect_helmet_time = time.time()
            print('detect HELMET'+str(detect_person_cnt)+' '+str(detect_helmet_cnt))

        return frame
