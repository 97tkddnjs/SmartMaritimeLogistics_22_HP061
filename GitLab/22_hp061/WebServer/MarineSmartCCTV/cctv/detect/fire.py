import datetime

from django.core.files.base import ContentFile

from account.models import AuthUser


import cv2
import numpy as np
import time

from cctv.models import Detect, Alarm


class FireDetector():
    def __init__(self, username):
        self.username = username
        self.net = cv2.dnn.readNet("cctv/data/yolov3_custom1_1000.weights",
                                   "cctv/data/yolov3_custom.cfg")
        self.classes = ["fire"]
        # YOLO 네트워크 불러오기
        self.layer_names = self.net.getLayerNames()

        self.output_layers = [self.layer_names[i - 1] for i in self.net.getUnconnectedOutLayers()]
        # 클래스의 갯수만큼 랜덤 RGB 배열을 생성
        self.colors = np.random.uniform(0, 255, size=(len(self.classes), 3))

        # 탐지 시간
        self.detect_fire_time = time.time()


    def detect_fire(self, frame, size, score_threshold, nms_threshold, camid):
        if time.time()-self.detect_fire_time<10:
            return;
        copy_frame = frame.copy()
        # 이미지의 높이, 너비, 채널 받아오기
        height, width, channels = frame.shape

        # 네트워크에 넣기 위한 전처리
        blob = cv2.dnn.blobFromImage(frame, 0.00392, (size, size), (0, 0, 0), True, crop=False)

        # 전처리된 blob 네트워크에 입력
        self.net.setInput(blob)

        # 결과 받아오기
        outs = self.net.forward(self.output_layers)

        # 각각의 데이터를 저장할 빈 리스트
        class_ids = []
        confidences = []
        boxes = []
        # printq
        for out in outs:
            for detection in out:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                if not (class_id == 0 or class_id == 15 or class_id == 16):
                    continue
                if confidence > 0.1:
                    # 탐지된 객체의 너비, 높이 및 중앙 좌표값 찾기
                    center_x = int(detection[0] * width)
                    center_y = int(detection[1] * height)
                    w = int(detection[2] * width)
                    h = int(detection[3] * height)

                    # 객체의 사각형 테두리 중 좌상단 좌표값 찾기
                    x = int(center_x - w / 2)
                    y = int(center_y - h / 2)

                    boxes.append([x, y, w, h])
                    confidences.append(float(confidence))
                    class_ids.append(class_id)

        # Non Maximum Suppression (겹쳐있는 박스 중 confidence 가 가장 높은 박스를 선택)
        indexes = cv2.dnn.NMSBoxes(boxes, confidences, score_threshold=score_threshold, nms_threshold=nms_threshold)

        for i in range(len(boxes)):
            if i in indexes:
                x, y, w, h = boxes[i]
                class_name = self.classes[class_ids[i]]
                label = f"{class_name} {confidences[i]:.2f}"
                color = self.colors[class_ids[i]]

                # 사각형 테두리 그리기 및 텍스트 쓰기
                cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
                cv2.rectangle(frame, (x - 1, y), (x + len(class_name) * 13 + 65, y - 25), color, -1)
                cv2.putText(frame, label, (x, y - 8), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1, (0, 0, 0), 2)

                if class_name=='fire':
                    detectModel = Detect()

                    ret1, frame1 = cv2.imencode('.jpg', frame)
                    ret2, frame2 = cv2.imencode('.jpg', copy_frame)
                    user = AuthUser.objects.get(username=self.username)
                    ts = time.time()
                    timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')

                    detectModel.uid = user
                    file1 = ContentFile(frame1)
                    file2 = ContentFile(frame2)
                    file1.name = 'fire_'+timestamp + '_1' + '.jpg'
                    file2.name = 'fire_'+timestamp + '_2' + '.jpg'
                    detectModel.image1 = file1
                    detectModel.image2 = file2
                    detectModel.time = timestamp
                    detectModel.camid = camid
                    detectModel.type='FIRE'
                    detectModel.save()

                    alarm = Alarm()
                    alarm.uid=user
                    alarm.did=detectModel
                    alarm.camid=camid
                    alarm.time=timestamp
                    alarm.confirm=0
                    alarm.type='FIRE'
                    alarm.save()

                    self.detect_fire_time=time.time()
                    print('detect fire')
                    break

        return frame
