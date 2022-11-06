from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from cctv.models import Alarm


def app_alarm(request):
    user = None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
    context = {
        'user': user,
    }
    return render(request, "app/index.html", context=context)

def confirm_alarm(request):
    pass

@csrf_exempt
def ajax_alarm(request):
    user=None
    if request.session.get('id'):
        user = User.objects.get(id=request.session.get('id'))
    uid = request.POST.get('send_data')
    data= {}
    alarm_list = Alarm.objects.filter(confirm=0)
    for alarm in alarm_list:
        data_dic={}
        data_dic['camid'] = alarm.camid
        data_dic['time'] = alarm.time
        data_dic['type'] = alarm.type
        data[alarm.id]=data_dic

    send_message = data
    print(send_message)
    return JsonResponse(send_message)

