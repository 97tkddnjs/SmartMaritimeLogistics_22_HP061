import datetime
import time
from threading import Thread

from account.models import AuthUser
from cctv.connect.frame import Frame
from cctv.models import CamConnectHistory


class Client:
    def __init__(self, username, client_socket, rpid, policy):
        self.cnt = 0
        self.username = username
        self.connections = {}
        self.threads = {}

        self.cnt+=1
        conn = Frame(client_socket, username,rpid, policy)
        self.connections[rpid]=conn
        print("=========================1")
        live_detect_thread = Thread(target=self.thread_func, args=(rpid,conn,))#Thread(target=conn.detect_live)
        print("=========================2")
        live_detect_thread.start()
        print("=========================3")
        self.threads[rpid] = live_detect_thread
        print("=========================4")
        cam_connetct_history = CamConnectHistory()
        user = AuthUser.objects.get(username=self.username)
        ts = time.time()
        timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
        cam_connetct_history.uid = user
        cam_connetct_history.camid = rpid
        cam_connetct_history.time = timestamp
        cam_connetct_history.division = 'CONNECT'
        cam_connetct_history.save()


    def thread_func(self, rpid, conn):
        conn.detect_live()
        self.disconnect_socket(rpid)

    def add_client(self, client_socket, rpid, policy):
        self.cnt += 1
        conn = Frame(client_socket, self.username, rpid, policy)
        self.connections[rpid] = conn
        live_detect_thread = Thread(target=self.thread_func, args=(rpid,conn,))
        live_detect_thread.start()
        self.threads[rpid] = live_detect_thread

        cam_connetct_history = CamConnectHistory()
        user = AuthUser.objects.get(username=self.username)
        ts = time.time()
        timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
        cam_connetct_history.uid = user
        cam_connetct_history.camid = rpid
        cam_connetct_history.time = timestamp
        cam_connetct_history.division = 'CONNECT'
        cam_connetct_history.save()

    def disconnect_socket(self, id):
        self.connections[id].disconnet()
        del self.connections[id]
        self.cnt-=1

        cam_connetct_history = CamConnectHistory()
        user = AuthUser.objects.get(username=self.username)
        ts = time.time()
        timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
        cam_connetct_history.uid = user
        cam_connetct_history.camid = id
        cam_connetct_history.time = timestamp
        cam_connetct_history.division = 'DISCONNECT'
        cam_connetct_history.save()