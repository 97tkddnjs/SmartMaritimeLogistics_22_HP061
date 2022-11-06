import asyncio
# 웹 소켓 모듈을 선언한다.
import websockets

import cv2  # OpenCV(실시간 이미지 프로세싱) 모듈
import socket  # 소켓 프로그래밍에 필요한 API를 제공하는 모듈
import pickle  # 바이트(bytes) 형식의 데이터 변환 모듈
import struct  # 바이트(bytes) 형식의 데이터 처리 모듈
# ----------------------------------------------------------------------------------------------//
# Python 웹소켓 서버에 접속에서 프롬프트 상에서 문자열을 입력받아 Python 웹소켓 서버에 전송하고
# 전송한 문자열에 대한 에코를 리턴 받는다.
# quit(종료) 문자를 입력받을 때까지 계속 웹소켓 연결되어 있다. quit 문자가 입력되면 접속이 자동으로 끊긴다.
# Python 웹소켓 서버는 파이참에서 실행중이다.
# ----------------------------------------------------------------------------------------------//
# 카메라 또는 동영상
capture = cv2.VideoCapture(0)
# 프레임 크기 지정
capture.set(cv2.CAP_PROP_FRAME_WIDTH, 640)  # 가로
capture.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)  # 세로
async def connect():

    # 웹 소켓에 접속을 합니다.
    async with websockets.connect("ws://localhost:9998/websocket") as websocket:
        # 메시지 수신
        while True:
            # 프레임 읽기
            retval, frame = capture.read()

            # imencode : 이미지(프레임) 인코딩
            # 1) 출력 파일 확장자
            # 2) 인코딩할 이미지
            # 3) 인코드 파라미터
            #   - jpg의 경우 cv2.IMWRITE_JPEG_QUALITY를 이용하여 이미지의 품질(0 ~ 100)을 설정
            #   - png의 경우 cv2.IMWRITE_PNG_COMPRESSION을 이용하여 이미지의 압축률(0 ~ 9)을 설정
            # [return]
            # 1) 인코딩 결과(True / False)
            # 2) 인코딩된 이미지
            retval, frame = cv2.imencode('.jpg', frame, [cv2.IMWRITE_JPEG_QUALITY, 90])

            # dumps : 데이터를 직렬화
            # - 직렬화(serialization) : 효율적으로 저장하거나 스트림으로 전송할 때 데이터를 줄로 세워 저장하는 것
            frame = pickle.dumps(frame)

            await websocket.send(frame)

            # 웹 소켓 서버로 부터 메시지가 오면 콘솔에 출력합니다.
            data = await websocket.recv()


# 비동기로 서버에 접속한다.
asyncio.get_event_loop().run_until_complete(connect())
