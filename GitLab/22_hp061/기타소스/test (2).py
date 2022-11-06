import requests
import datetime as dt



# 그 전 팀들 보니까 db 만드네 쩝...
# 스키마:
# 날짜 - 시간, 하늘 상태 , 강수 형태,  풍향,  풍속
# 
#  schmema 
# ( time ) <-primary key ,( port ) , ( sky ),    

# DB 관련 부분
# class Weather(models.Model):
#     port_reg_time = models.CharField(max_length=45, primary_key=True)
#     pty = models.CharField(max_length=45) # 강수형태 <- 한글로 입력할 예정
#     sky = models.CharField(max_length=45) # 하늘상태 <- 한글로 입력할 예정
#     vec = models.IntegerField(blank=True, null=True) # vec 는 풍향
#     wsd = models.IntegerField(blank=True, null=True) # wsd 는 풍속
#     t1h = models.IntegerField(blank=True, null=True) # 온도
#     class Meta:
#         managed = False
#         db_table = 'weather'


def time_func(x):
    return '0'+str(x)+'00' if x<10 else str(x)+'00'

def weather():

    return_data=[]
    # 초단기 예보 url
    # 한번 조회에 base time+1~6시간 어치 데이터 제공
    url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst'


    # 단기 예보 파고 도 존재
    # 5시 시준 3시간
    # 즉, 2, 5, 8, 11, 14, 17, 20,23
    #url ="http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"

    # 울산부터 시작~  #nx 102, ny 83이 울산 남구쪽 울산항만위치임
    port_list=[('울산','102','83'), ('인천', '54', '125'),  ('부산','97','74' )]

    real_date = dt.datetime.now()
    delta = dt.timedelta(hours=1)
    date = real_date -delta
    print(date)
    func =lambda x : '0'+str(x) if x<10 else str(x)


    base_date = str(date.year)+func(date.month)+func(date.day)
    base_time= time_func(int(date.hour)) 
    

    for port in port_list:

        port_name ,nx , ny = port

        print(base_time)
        
        api_key ='OP1qrLOB%2BG9uJ2pCz656nZ9JpvnsybG8%2F14r0jVDPRFiKYxn5MTy%2FnkEhfNVuQeRmCh3GOFgDqXFoTSEN0JyiQ%3D%3D'
        
        api_key_decode = requests.utils.unquote(api_key)

        params ={'serviceKey' : api_key_decode, 
        'pageNo' : '1', 'numOfRows' : '1000', 'dataType' : 'JSON', 
        'base_date' : base_date, 'base_time' : base_time, 'nx' : nx, 'ny' : ny }

       
        # requests.
        response = requests.get(url, params=params)
        #print(response.content)
        data= response.json()['response']['body']['items']['item']
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

        time= int(base_time[:2])
        print(time)
        for i in range((time + 1), (time + 7)):
            if i < 24:
                rd[i] = {'fcstDate': 0, 'T1H': 0, 'SKY': 0, 'PTY': 0, 'VEC': 0, 'WSD': 0, 'PORT': 0}
            else:
                rd[i % 24] = {'fcstDate': 0, 'T1H': 0, 'SKY': 0, 'PTY': 0, 'VEC': 0, 'WSD': 0, 'PORT': 0}

        pty={0 : '없음', 1 : '비', 2 : '비/눈', 3: '눈', 5:'빗방울', 6 :'빗방울눈날림', 7:'눈날림' }
        sky={1:'맑음', 3:'구름많음', 4:'흐림'}
        # 한번 조회에 6시간~을 가져다 주니까~ 정리하면 다음과 같음
        print(port_name)
        for i in range(60):
            fcstTime = int(data[i]['fcstTime'][:2])
            cat =  data[i]['category']
            val = data[i]['fcstValue']
            fcstDate=data[i]['fcstDate']
            # print(fcstTime," ", cat," ", val," ",fcstDate)
            if rd[fcstTime].get(cat) !=None:
                if cat == 'PTY':
                    rd[fcstTime][cat] = pty[int(val)]
                elif cat =='SKY':
                    rd[fcstTime][cat] = sky[int(val)]
                else:
                    rd[fcstTime][cat] = val
                rd[fcstTime]['fcstDate'] = fcstDate
                rd[fcstTime]['PORT'] = port_name\
        

        return_data.extend(list(rd.items())) 
    return return_data


# def weather_save_db(all_data):
#     for data in all_data:
#         time ,inform =data
#         Weather(
#         #202208231700 이런 형태로 저장
#         port_reg_time = inform['fcstDate']+   time_func(time) +"_"+inform['PORT']
#         ,pty = inform['PTY'] # 강수형태 <- 한글로 입력할 예정
#         ,sky = inform['SKY'] # 하늘상태 <- 한글로 입력할 예정
#         ,vec = inform['VEC'] # vec 는 풍향
#         ,wsd =  inform['WSD'] # wsd 는 풍속
#         ,t1h =  inform['T1H'] # 온도
#         )
#         Weather.save()
#     pass

# def check_weather():
#     real_time = dt.datetime.now()
#     func =lambda x : '0'+str(x) if x<10 else str(x)
#
#     date = str(real_time.year)+func(real_time.month)+func(real_time.day)
#
#     # 나중에는 port_list 에 Queryset port 의 정보가 남게 된다.
#     port_list =['울산','인천', '부산']
#
#
#
#     for i, port in enumerate(port_list):
#         data = Weather.objects.get(pk = date+"_"+port)
#         if data == None:
#             weather_save_db(weather())
#             data = Weather.objects.get(pk = date+"_"+port)
#         port_list[i]= date
    
    

print(weather())