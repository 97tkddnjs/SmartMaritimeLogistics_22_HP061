from django.urls import path

from app import views

urlpatterns = [
    path('', views.app_alarm),
    path('ajax/alarm/', views.ajax_alarm),
]