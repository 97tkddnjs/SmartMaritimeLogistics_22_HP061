from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.db import models
from django.core.paginator import Paginator  

from unicodedata import category
import requests
import datetime as dt

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from account.models import AuthUser
from cctv.models import CamConnectHistory, CapturePicture, RecordingVideo, Alarm, Cctv, Detect
from cctv.views import CAMERA
from mypage.models import NewsData, Weather

from news.wordcloudtest import News


def landing(request):
    # real_time = dt.datetime.now()
    # func =lambda x : '0'+str(x) if x<10 else str(x)
    # date = str(real_time.year)+func(real_time.month)+func(real_time.day)
    # port_list =['울산','인천', '부산']
    # for i, port in enumerate(port_list):
    #     try:
    #         data = Weather.objects.get(port_reg_time=date+"_"+port)
    #     except ObjectDoesNotExist:
    #         print(1)
    #         weather_save_db(weather())
    #         data = Weather.objects.get(port_reg_time=date + "_" + port)
    #     port_list[i]= date

    user = None
    alarmCnt = None
    alarmList = None
    cctv_list = None
    fireCnt = None
    falldownCnt = None
    policyPersonCnt = None
    policyHelmetCnt = None

    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
        cctv_list = Cctv.objects.filter(uid=user.id)
        fireCnt = Detect.objects.filter(type='FIRE').count()
        falldownCnt = Detect.objects.filter(type='FALLDOWN').count()
        policyPersonCnt = Detect.objects.filter(type='PERSON').count()
        policyHelmetCnt = Detect.objects.filter(type='HELMET').count()
    context = {
        'fireCnt':fireCnt,
        'falldownCnt':falldownCnt,
        'policyPersonCnt':policyPersonCnt,
        'policyHelmetCnt':policyHelmetCnt,
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'cctv_list': cctv_list,
        #'port_list' : port_list,
    }
    return render(request, "mypage/index.html", context=context)


def cctv_reg_list(request):
    user = None
    alarmCnt = None
    alarmList = None
    cctv_list = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
        cctv_list = Cctv.objects.filter(uid=user.id)
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'cctv_list': cctv_list,
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
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
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
        policy['helmet'] = cctv.po_helmet
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'camid': camid,
        'cctv': cctv,
        'alarmList_camid_0': alarmList_camid_0,
        'alarmList_camid_1': alarmList_camid_1,
        'connectList_camid': connectList_camid,
        'captureList_camid': captureList_camid,
        'recordingList_camid': recordingList_camid,
        'policy': policy,
    }
    return render(request, "mypage/cctv/cctv_detail.html", context=context)


def detect_fire(request):
    user = None
    alarmCnt = None
    alarmList = None
    detect = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
        detect = Detect.objects.filter(type='FIRE')

    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'detect': detect,
    }
    return render(request, "mypage/detect/detect_list.html", context=context)

def detect_falldown(request):
    user = None
    alarmCnt = None
    alarmList = None
    detect = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
        detect = Detect.objects.filter(type='FALLDOWN')

    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'detect': detect,
    }
    return render(request, "mypage/detect/detect_list.html", context=context)

def detect_person(request):
    user = None
    alarmCnt = None
    alarmList = None
    detect = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
        detect = Detect.objects.filter(type='PERSON')

    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'detect': detect,
    }
    return render(request, "mypage/detect/detect_list.html", context=context)

def detect_helmet(request):
    user = None
    alarmCnt = None
    alarmList = None
    detect = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
        detect = Detect.objects.filter(type='HELMET')

    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'detect': detect,
    }
    return render(request, "mypage/detect/detect_list.html", context=context)

def detect_detail(request, id):
    user = None
    alarmCnt = None
    alarmList = None
    detect = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
        detect = Detect.objects.get(id=id)
        alarm = Alarm.objects.get(did=detect)
        alarm.confirm = 1
        alarm.save()
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
        'detect': detect,
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
    alarmCnt = None
    alarmList = None
    cam_connect_history = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
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
    alarmCnt = None
    alarmList = None
    capture_pictures = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
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
    alarmCnt = None
    alarmList = None
    recording_videos = None
    media = '/media/'
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
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
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        'alarmList': alarmList,
    }
    return render(request, "mypage/alarm.html", context=context)

def chart(request):
    print("yes")
    user = None
    alarmCnt = None
    # alarmList = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
    context = {
        'user': user,
        'alarmCnt': alarmCnt,
    }
    return render(request,'mypage/side/charts.html',context=context)

def show_news(request):
    user = None
    alarmCnt = None
    # alarmList = None
    if request.session.get('id'):
        #NewsData
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
        alarmList = Alarm.objects.filter(confirm=0).order_by('-time')
    
    page = request.GET.get('page', '1')  # 페이지

    news_db_data= NewsData.objects.all()
    paginator = Paginator(news_db_data, 10)  # 페이지당 10개씩 보여주기
    page_obj = paginator.get_page(page)

    context = {
        'user': user,
        'alarmCnt': alarmCnt,
        # 'urls' : news.news_url,
        'datas': page_obj

    }
    return render(request,'mypage/side/news.html',context=context)
    

def news(request):
    

    news = News()
    keyword="항만"

    news.news_main(keyword)
    news_db_data= NewsData.objects.all()
    print(news_db_data)
    #제목 콘텐츠 url 날짜 순으로 -> tuple
    for news_data in news.final_datas:

        title_hash_val = hash(news_data[0])
        # print(title_hash_val, type(title_hash_val))
        
        news_data_title = news_data[0]
        news_data_url = news_data[2]
        news_data_content = news_data[1]
        news_data_date = news_data[3]

        check_data= NewsData.objects.filter(news_title=news_data_title)
        
        # check_data_11= NewsData.objects.filter(hash_num=4)
        # print("here" , check_data_11)
        if check_data:
            continue

        news_db_data=NewsData(
            hash_num = title_hash_val,
            news_title = news_data_title,
            news_url = news_data_url,
            news_content = news_data_content,
            news_date = news_data_date
        )
        news_db_data.save()
    # news.show()
    news.make_wordcloud(30)
    return redirect('/mypage/side/news')

def time_func(x):
    return '0' + str(x) + '00' if x < 10 else str(x) + '00'


def weather():
    return_data = []
    # 초단기 예보 url
    # 한번 조회에 base time+1~6시간 어치 데이터 제공
    url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst'

    # 단기 예보 파고 도 존재
    # 5시 시준 3시간
    # 즉, 2, 5, 8, 11, 14, 17, 20,23
    # url ="http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"

    # 울산부터 시작~  #nx 102, ny 83이 울산 남구쪽 울산항만위치임
    port_list = [('울산', '102', '83'), ('인천', '54', '125'), ('부산', '97', '74')]

    real_date = dt.datetime.now()
    delta = dt.timedelta(hours=1)
    date = real_date - delta
    print(date)
    func = lambda x: '0' + str(x) if x < 10 else str(x)

    base_date = str(date.year) + func(date.month) + func(date.day)
    base_time = time_func(int(date.hour))

    for port in port_list:

        port_name, nx, ny = port

        print(base_time)

        api_key = 'OP1qrLOB%2BG9uJ2pCz656nZ9JpvnsybG8%2F14r0jVDPRFiKYxn5MTy%2FnkEhfNVuQeRmCh3GOFgDqXFoTSEN0JyiQ%3D%3D'

        api_key_decode = requests.utils.unquote(api_key)

        params = {'serviceKey': api_key_decode,
                  'pageNo': '1', 'numOfRows': '1000', 'dataType': 'JSON',
                  'base_date': base_date, 'base_time': base_time, 'nx': nx, 'ny': ny}

        # requests.
        response = requests.get(url, params=params)
        # print(response.content)
        data = response.json()['response']['body']['items']['item']
        # 총 속성은 10가지이고 시간대는 6개의 시간대
        # t1h 는 온도~
        # rn1은 1시간 강수량  '강수 없음' 도 가능함
        # <- 0.1 ~ 1.0mm 미만            //	1.0mm 미만
        # <- 1.0mm 이상 30.0mm 미만      //	실수값+mm(1.0mm~29.9mm)
        # <- 30.0 mm 이상 50.0 mm 미만   //	30.0~50.0mm
        # <- 50.0 mm 이상	             //50.0mm 이상
        # sky 는 하늘상태  -> 맑음(1), 구름많음(3), 흐림(4)
        # pty 강수 형태  -> 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7)
        # vec 는 풍향
        # wsd 는 풍속

        rd = dict()

        time = int(base_time[:2])
        print(time)
        for i in range((time + 1), (time + 7)):
            if i < 24:
                rd[i] = {'fcstDate': 0, 'T1H': 0, 'SKY': 0, 'PTY': 0, 'VEC': 0, 'WSD': 0, 'PORT': 0}
            else:
                rd[i % 24] = {'fcstDate': 0, 'T1H': 0, 'SKY': 0, 'PTY': 0, 'VEC': 0, 'WSD': 0, 'PORT': 0}

        pty = {0: '없음', 1: '비', 2: '비/눈', 3: '눈', 5: '빗방울', 6: '빗방울눈날림', 7: '눈날림'}
        sky = {1: '맑음', 3: '구름많음', 4: '흐림'}
        # 한번 조회에 6시간~을 가져다 주니까~ 정리하면 다음과 같음
        print(port_name)
        for i in range(60):
            fcstTime = int(data[i]['fcstTime'][:2])
            cat = data[i]['category']
            val = data[i]['fcstValue']
            fcstDate = data[i]['fcstDate']
            # print(fcstTime," ", cat," ", val," ",fcstDate)
            if rd[fcstTime].get(cat) != None:
                if cat == 'PTY':
                    rd[fcstTime][cat] = pty[int(val)]
                elif cat == 'SKY':
                    rd[fcstTime][cat] = sky[int(val)]
                else:
                    rd[fcstTime][cat] = val
                rd[fcstTime]['fcstDate'] = fcstDate
                rd[fcstTime]['PORT'] = port_name

        return_data.extend(list(rd.items()))
    return return_data


def weather_save_db(all_data):
    for data in all_data:
        time, inform = data
        Weather(
            # 202208231700 이런 형태로 저장
            port_reg_time=inform['fcstDate'] + time_func(time) + "_" + inform['PORT']
            , pty=inform['PTY']  # 강수형태 <- 한글로 입력할 예정
            , sky=inform['SKY']  # 하늘상태 <- 한글로 입력할 예정
            , vec=inform['VEC']  # vec 는 풍향
            , wsd=inform['WSD']  # wsd 는 풍속
            , t1h=inform['T1H']  # 온도
        )
        Weather.save()
    pass

@csrf_exempt
def ajax_statics(request):
    day = request.POST.get('datetime')
    username = request.POST.get('username')
    user = AuthUser.objects.get(username=username)

    fireCnt = Detect.objects.filter(type='FIRE',time__month=day.split('-')[1],
                                                        time__day=day.split('-')[2]).count()
    falldownCnt = Detect.objects.filter(type='FALLDOWN',time__year=day.split('-')[0],time__month=day.split('-')[1],
                                                        time__day=day.split('-')[2]).count()
    policyPersonCnt = Detect.objects.filter(type='PERSON',time__year=day.split('-')[0],time__month=day.split('-')[1],
                                                        time__day=day.split('-')[2]).count()
    policyHelmetCnt = Detect.objects.filter(type='HELMET',time__year=day.split('-')[0],time__month=day.split('-')[1],
                                                        time__day=day.split('-')[2]).count()



    send_message = {'fire' : fireCnt, 'falldown' : falldownCnt, 'policy_person' : policyPersonCnt, 'policy_helmet' : policyHelmetCnt}
    return JsonResponse(send_message)

@csrf_exempt
def ajax_statics_fire(request):
    day = request.POST.get('datetime')
    username = request.POST.get('username')
    user = AuthUser.objects.get(username=username)

    fireCnt = Detect.objects.filter(type='FIRE',time__month=day.split('-')[1],
                                                        time__day=day.split('-')[2]).all()

    hour_fire = {}
    for fire in fireCnt:
        time = str(fire.time) # 2022-08-08 11:05:26
        hour = time.split(" ")[1].split(":")[0]
        if hour in hour_fire:
            hour_fire[hour] = hour_fire[hour]+1
        else:
            hour_fire[hour]=1
    send_message = {}
    for key in hour_fire.keys():
        send_message[key]=hour_fire[key]

    return JsonResponse(send_message)

@csrf_exempt
def ajax_statics_falldown(request):
    day = request.POST.get('datetime')
    username = request.POST.get('username')
    user = AuthUser.objects.get(username=username)

    falldownCnt = Detect.objects.filter(type='FALLDOWN',time__month=day.split('-')[1],
                                                        time__day=day.split('-')[2]).all()

    hour_falldown = {}
    for falldown in falldownCnt:
        time = str(falldown.time) # 2022-08-08 11:05:26
        hour = time.split(" ")[1].split(":")[0]
        if hour in hour_falldown:
            hour_falldown[hour] = hour_falldown[hour]+1
        else:
            hour_falldown[hour]=1
    send_message = {}
    for key in hour_falldown.keys():
        send_message[key]=hour_falldown[key]

    return JsonResponse(send_message)

@csrf_exempt
def ajax_statics_policy_person(request):
    day = request.POST.get('datetime')
    username = request.POST.get('username')
    user = AuthUser.objects.get(username=username)

    policyPerson = Detect.objects.filter(type='PERSON',time__month=day.split('-')[1],
                                                        time__day=day.split('-')[2]).all()

    hour_policyPerson = {}
    for person in policyPerson:
        time = str(person.time) # 2022-08-08 11:05:26
        hour = time.split(" ")[1].split(":")[0]
        if hour in hour_policyPerson:
            hour_policyPerson[hour] = hour_policyPerson[hour]+1
        else:
            hour_policyPerson[hour]=1
    send_message = {}
    for key in hour_policyPerson.keys():
        send_message[key]=hour_policyPerson[key]

    return JsonResponse(send_message)

@csrf_exempt
def ajax_statics_policy_helmet(request):
    day = request.POST.get('datetime')
    username = request.POST.get('username')
    user = AuthUser.objects.get(username=username)

    policyHelmet = Detect.objects.filter(type='HELMET',time__month=day.split('-')[1],
                                                        time__day=day.split('-')[2]).all()

    hour_policyHelmet = {}
    for helmet in policyHelmet:
        time = str(helmet.time) # 2022-08-08 11:05:26
        hour = time.split(" ")[1].split(":")[0]
        if hour in hour_policyHelmet:
            hour_policyHelmet[hour] = hour_policyHelmet[hour]+1
        else:
            hour_policyHelmet[hour]=1
    send_message = {}
    for key in hour_policyHelmet.keys():
        send_message[key]=hour_policyHelmet[key]

    return JsonResponse(send_message)

def blank(request):
    user = None
    alarmCnt = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
        alarmCnt = Alarm.objects.filter(confirm=0).count()
    context = {
        'user': user,
        'alarmCnt': alarmCnt
    }
    return render(request, "mypage/blank.html", context=context)
