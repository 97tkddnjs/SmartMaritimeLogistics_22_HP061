from django.contrib.auth.models import User
from django.shortcuts import render, redirect

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from cctv.models import CamConnectHistory, CapturePicture, RecordingVideo, Alarm, Cctv, Detect
from cctv.views import CAMERA


def landing(request):
    user = None
    alarmCnt=None
    alarmList = None
    cctv_list = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(uid=user.id, confirm=0).count()
        alarmList = Alarm.objects.filter(uid=user.id, confirm=0).order_by('-time')
        cctv_list = Cctv.objects.filter(uid=user.id)
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'cctv_list': cctv_list,
    }
    return render(request, "mypage/index.html", context=context)

def cctv_reg_list(request):
    user = None
    alarmCnt=None
    alarmList = None
    cctv_list = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(uid=user.id, confirm=0).count()
        alarmList = Alarm.objects.filter(uid=user.id, confirm=0).order_by('-time')
        cctv_list = Cctv.objects.filter(uid=user.id)
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'cctv_list' : cctv_list,
    }
    return render(request, "mypage/cctv/cctv_list.html", context=context)

def cctv_detail(request, id):
    user = None
    alarmCnt = None
    alarmList = None
    camid = id
    cctv = None
    alarmList_camid_0 = None
    alarmList_camid_1 = None
    connectList_camid = None
    captureList_camid = None
    recordingList_camid = None
    detectList_camid = None
    policy = {}
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(uid=user.id, confirm=0).count()
        alarmList = Alarm.objects.filter(uid=user.id, confirm=0).order_by('-time')
        cctv = Cctv.objects.get(camid=camid)
        alarmList_camid_0 = Alarm.objects.filter(uid=user.id, camid=camid, confirm=0)
        alarmList_camid_1 = Alarm.objects.filter(uid=user.id, camid=camid, confirm=1)
        connectList_camid = CamConnectHistory.objects.filter(uid=user.id, camid=camid)
        captureList_camid = CapturePicture.objects.filter(uid=user.id, camid=camid)
        recordingList_camid = RecordingVideo.objects.filter(uid=user.id, camid=camid)
    if cctv != None:
        policy['fire'] = cctv.po_fire
        policy['person'] = cctv.po_person
        policy['person_cnt'] = cctv.po_person_cnt
        policy['falldown'] = cctv.po_falldown
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'camid' : camid,
        'cctv' : cctv,
        'alarmList_camid_0' : alarmList_camid_0,
        'alarmList_camid_1': alarmList_camid_1,
        'connectList_camid' : connectList_camid,
        'captureList_camid' : captureList_camid,
        'recordingList_camid' : recordingList_camid,
        'policy' : policy,
    }
    return render(request, "mypage/cctv/cctv_detail.html", context=context)

def detect_fire(request):
    user = None
    alarmCnt = None
    alarmList = None
    detect = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(uid=user.id, confirm=0).count()
        alarmList = Alarm.objects.filter(uid=user.id, confirm=0).order_by('-time')
        detect = Detect.objects.filter(type='FIRE', uid=user.id)

    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'detect' : detect,
    }
    return render(request, "mypage/detect/detect_fire.html", context=context)


def detect_detail(request, id):
    user = None
    alarmCnt = None
    alarmList = None
    detect = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(uid=user.id, confirm=0).count()
        alarmList = Alarm.objects.filter(uid=user.id, confirm=0).order_by('-time')
        detect = Detect.objects.get(id=id)
        alarm = Alarm.objects.get(did=detect)
        alarm.confirm=1
        alarm.save()
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'detect' : detect,
    }
    return render(request, "mypage/detect/detect_detail.html", context=context)

# def config_mode_fire(request, id):
#     if request.session.get('id'):
#         user = User.objects.get(id=request.session.get('id'))
#         client = CAMERA.threads[user.username]
#         cctv = Cctv.objects.get(camid=id)
#         cctv.po_fire = 1-cctv.po_fire
#         cctv.save()
#         client.connections[id].policy_fire=cctv.po_fire
#         return redirect('/mypage/cctv/'+id)
#
# def config_mode_person(request, id):
#     if request.session.get('id'):
#         user = User.objects.get(id=request.session.get('id'))
#         client = CAMERA.threads[user.username]
#         cctv = Cctv.objects.get(camid=id)
#         cctv.po_person = 1-cctv.po_person
#         cctv.save()
#         client.connections[id].policy_person=cctv.po_person
#         return redirect('/mypage/cctv/'+id)
#
# @csrf_exempt
# def config_mode_person_cnt(request, id):
#     if request.session.get('id'):
#         user = User.objects.get(id=request.session.get('id'))
#         client = CAMERA.threads[user.username]
#         cnt = request.POST['cnt']
#         cctv = Cctv.objects.get(camid=id)
#         cctv.po_person_cnt = cnt
#         cctv.save()
#         client.connections[id].policy_person_cnt=cctv.po_person_cnt
#         return redirect('/mypage/cctv/'+id)
#
# def config_mode_falldown(request, id):
#     if request.session.get('id'):
#         user = User.objects.get(id=request.session.get('id'))
#         client = CAMERA.threads[user.username]
#         cctv = Cctv.objects.get(camid=id)
#         cctv.po_falldown = 1-cctv.po_falldown
#         cctv.save()
#         client.connections[id].policy_falldown = cctv.po_falldown
#         return redirect('/mypage/cctv/'+id)

def log_cctv_connect(request):
    user = None
    alarmCnt=None
    alarmList = None
    cam_connect_history = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(uid=user.id, confirm=0).count()
        alarmList = Alarm.objects.filter(uid=user.id, confirm=0).order_by('-time')
        cam_connect_history = CamConnectHistory.objects.filter(uid=user.id).order_by('-time')
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'cam_connect_history': cam_connect_history,
    }
    return render(request, "mypage/log/cctv_connect_log.html", context=context)

def user_capture_image_list(request):
    user = None
    alarmCnt=None
    alarmList = None
    capture_pictures = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(uid=user.id, confirm=0).count()
        alarmList = Alarm.objects.filter(uid=user.id, confirm=0).order_by('-time')
        capture_pictures = CapturePicture.objects.filter(uid=user.id)
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'capture_pictures': capture_pictures,
    }
    return render(request, "mypage/page/media/capture_image.html", context=context)

def user_recording_video_list(request):
    user = None
    alarmCnt=None
    alarmList = None
    recording_videos = None
    media = '/media/'
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(uid=user.id, confirm=0).count()
        alarmList = Alarm.objects.filter(uid=user.id, confirm=0).order_by('-time')
        recording_videos = RecordingVideo.objects.filter(uid=user.id)
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'recording_videos': recording_videos,
    }
    return render(request, "mypage/page/media/recording_video.html", context=context)

def delete_capture(request, id):
    capture_picture = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        capture_picture = CapturePicture.objects.get(cpid=id)
    capture_picture.delete()
    return redirect('/mypage/page/user/capture')

def delete_video(request, id):
    video = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        video = RecordingVideo.objects.get(rvid=id)
    video.delete()
    return redirect('/mypage/page/user/recording')

def alarm_list(request):
    user = None
    alarmCnt = None
    alarmList = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(uid=user.id, confirm=0).count()
        alarmList = Alarm.objects.filter(uid=user.id, confirm=0).order_by('-time')
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
    }
    return render(request, "mypage/alarm.html", context=context)


def blank(request):
    user = None
    alarmCnt=None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(uid=user.id, confirm=0).count()
    context = {
        'user': user,
        'alarmCnt': alarmCnt
    }
    return render(request, "mypage/blank.html", context=context)