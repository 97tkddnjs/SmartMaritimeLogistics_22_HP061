#
# import tensorflow as tf
# from tensorflow import keras
# import cv2
# import mediapipe as mp
# import numpy as np
# import pandas as pd
# from tqdm import tqdm
# mp_drawing = mp.solutions.drawing_utils
# mp_drawing_styles = mp.solutions.drawing_styles
# mp_pose = mp.solutions.pose
#
#
# def extract_keypoints(results):
#     pose = np.array([[res.x, res.y, res.z, res.visibility] for res in
#                      results.pose_landmarks.landmark]).flatten() if results.pose_landmarks else np.zeros(33 * 4)
#     return pose
#
#
# def mediapipe_detection(image, model):
#     image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # COLOR CONVERSION BGR 2 RGB
#     image.flags.writeable = False  # Image is no longer writeable
#
#     results = model.process(image)  # Make prediction
#     image.flags.writeable = True  # Image is now writeable
#     image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)  # COLOR COVERSION RGB 2 BGR
#
#     return image, results
#
#
# def draw_styled_landmarks(image, results):
#     # Draw pose connections
#     mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS,
#                               mp_drawing.DrawingSpec(color=(80, 22, 10), thickness=2, circle_radius=4),
#                               mp_drawing.DrawingSpec(color=(80, 44, 121), thickness=2, circle_radius=2)
#                               )
#
#
#
# model = tf.keras.models.load_model('human_skeleton_act-99-0.92.hdf5')
#
# # 1. New detection variables
# sequence = []
#
# threshold = 0.8
# # path='6-3_002-C04.mp4'
# path = 0
# cap = cv2.VideoCapture(path)
# # Set mediapipe model
# with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
#     while cap.isOpened():
#
#         # Read feed
#         ret, frame = cap.read()
#
#         # Make detections
#         image, results = mediapipe_detection(frame, pose)
#         # print(results)
#
#         # 2. Prediction logic
#         keypoints = extract_keypoints(results)
#         #         sequence.insert(0,keypoints)
#         #         sequence = sequence[:30]
#         sequence.append(keypoints)
#         sequence = sequence[-100:]
#
#         text = 'no'
#         if len(sequence) == 100:
#             res = model.predict(np.expand_dims(sequence, axis=0))[0]
#             # text= LABEL_INT_DICT[np.argmax(res)]
#             text = str(np.argmax(res))
#
#         print(text)
#         # 3. Viz logic
#         draw_styled_landmarks(image, results)
#
#         # cv2.rectangle(image, (0,0), (640, 40), (245, 117, 16), -1)
#         cv2.putText(image, ' val =  ' + (text), (3, 30),
#                     cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)
#
#         # Show to screen
#         cv2.imshow('OpenCV Feed', image)
#
#         # Break gracefully
#         if cv2.waitKey(10) & 0xFF == ord('q'):
#             break
#     cap.release()
#     cv2.destroyAllWindows()


import tensorflow as tf
from tensorflow import keras
import cv2
import mediapipe as mp
import numpy as np
import pandas as pd
from tqdm import tqdm
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
mp_pose = mp.solutions.pose


def extract_keypoints(results):
    pose = np.array([[res.x, res.y, res.z, res.visibility] for res in
                     results.pose_landmarks.landmark]).flatten() if results.pose_landmarks else np.zeros(33 * 4)
    return pose


def mediapipe_detection(image, model):
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # COLOR CONVERSION BGR 2 RGB
    image.flags.writeable = False  # Image is no longer writeable

    results = model.process(image)  # Make prediction
    image.flags.writeable = True  # Image is now writeable
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)  # COLOR COVERSION RGB 2 BGR

    return image, results


def draw_styled_landmarks(image, results):
    # Draw pose connections
    mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS,
                              mp_drawing.DrawingSpec(color=(80, 22, 10), thickness=2, circle_radius=4),
                              mp_drawing.DrawingSpec(color=(80, 44, 121), thickness=2, circle_radius=2)
                              )



model = tf.keras.models.load_model('human_skeleton_act-99-0.92.hdf5')
#human_skeleton_act-99-0.92
# 1. New detection variables
sequence = []

threshold = 0.8
# path='6-3_002-C04.mp4'
path = 0
cap = cv2.VideoCapture(path)
# Set mediapipe model
pose = mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5)
while cap.isOpened():

    # Read feed
    ret, frame = cap.read()

    # Make detections
    image, results = mediapipe_detection(frame, pose)
    # print(results)

    # 2. Prediction logic
    keypoints = extract_keypoints(results)
    #         sequence.insert(0,keypoints)
    #         sequence = sequence[:30]
    sequence.append(keypoints)
    sequence = sequence[-100:]

    text = 'no'
    if len(sequence) == 100:
        res = model.predict(np.expand_dims(sequence, axis=0))[0]
        # text= LABEL_INT_DICT[np.argmax(res)]
        text = str(np.argmax(res))

    print(text)
    # 3. Viz logic
    draw_styled_landmarks(image, results)

    # cv2.rectangle(image, (0,0), (640, 40), (245, 117, 16), -1)
    cv2.putText(image, ' val =  ' + (text), (3, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)

    # Show to screen
    cv2.imshow('OpenCV Feed', image)

    # Break gracefully
    if cv2.waitKey(10) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows()