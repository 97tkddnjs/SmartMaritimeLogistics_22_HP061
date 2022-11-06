from django.conf.urls.static import static
from django.urls import path

from MarineSmartCCTV import settings
from cctv import views

urlpatterns = [
    path('', views.landing),
    path('list/', views.list),
    path('list/mypage/', views.list_mypage),
    path('live/<username>/<id>/', views.live),
    path('video/<username>/<id>/', views.video, name="video"),
    path('config/mode/fire/<id>', views.config_mode_fire),
    path('config/mode/person/<id>', views.config_mode_person),
    path('config/mode/person/cnt/<id>', views.config_mode_person_cnt),
    path('config/mode/falldown/<id>', views.config_mode_falldown),
    path('ajax/config/<username>/<id>/', views.ajax_connect_config),
    path('ajax/disconnect/<username>/<id>/', views.ajax_disconnect),
    path('ajax/capture/<username>/<id>/', views.ajax_capture),
    path('ajax/videoRC/<username>/<id>/', views.ajax_video_recording),
    path('ajax/config/rc/<username>/<id>/', views.config_Recording),
    path('ajax/main/', views.main_state)
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
