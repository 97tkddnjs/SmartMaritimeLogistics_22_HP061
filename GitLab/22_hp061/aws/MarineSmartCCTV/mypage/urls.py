from django.conf.urls.static import static
from django.urls import path

from MarineSmartCCTV import settings
from mypage import views

urlpatterns = [
    path('', views.landing),
    path('cctv/list/', views.cctv_reg_list),
    path('cctv/<id>/', views.cctv_detail),
    # path('config/mode/fire/<id>', views.config_mode_fire),
    # path('config/mode/person/<id>', views.config_mode_person),
    # path('config/mode/person/cnt/<id>', views.config_mode_person_cnt),
    # path('config/mode/falldown/<id>', views.config_mode_falldown),
    path('log/connect/', views.log_cctv_connect),
    path('page/user/capture/', views.user_capture_image_list),
    path('page/user/recording/', views.user_recording_video_list),
    path('delete/image/user/<id>/', views.delete_capture),
    path('delete/video/user/<id>/', views.delete_video),
    path('alarm/list/', views.alarm_list),
    path('detect/fire', views.detect_fire),
    path('detect/<id>/', views.detect_detail),
    path('blank/', views.blank),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)