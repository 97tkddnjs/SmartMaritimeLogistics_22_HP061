import asyncio

# 웹 소켓 모듈을 선언한다.
import websockets

import cv2
import struct
import pickle

# 클라이언트 접속이 되면 호출된다.
async def accept(websocket, path):
    data_buffer = b""
    while True:
        print(1)

        data_buffer += await websocket.recv()

        # 버퍼의 저장된 데이터 분할
        packed_data_size = data_buffer[:struct.calcsize("L")]
        data_buffer = data_buffer[struct.calcsize("L"):]
        # struct.unpack : 변환된 바이트 객체를 원래의 데이터로 변환
        frame_size = struct.unpack(">L", packed_data_size)[0]

        # 프레임 데이터 분할
        frame_data = data_buffer[:frame_size]
        data_buffer = data_buffer[frame_size:]
        # print("수신 프레임 크기 : {} bytes".format(frame_size))
        # loads : 직렬화된 데이터를 역직렬화
        # 역직렬화(de-serialization) : 직렬화된 파일이나 바이트 객체를 원래의 데이터로 복원하는 것
        frame = pickle.loads(frame_data)

        # imdecode : 이미지(프레임) 디코딩
        frame = cv2.imdecode(frame, cv2.IMREAD_COLOR)


        ret, frame = cv2.imencode('.jpg', frame)


        # 클라이언트로부터 메시지를 대기한다.
        #data = await websocket.recv();
        #print(data)
        print(1)
        # 클라인언트로 echo를 붙여서 재 전송한다.
        await websocket.send("echo : " + "1");

# 웹 소켓 서버 생성.호스트는 localhost에 port는 9998로 생성한다.
start_server = websockets.serve(accept, "localhost", 9998);

# 비동기로 서버를 대기한다.
asyncio.get_event_loop().run_until_complete(start_server);
asyncio.get_event_loop().run_forever();