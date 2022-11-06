from django.db import models

# Create your models here.
from account.models import AuthUser

def user_directory_path_capture_userRequest(instance, filename):
    return 'images/userRequest/{}/{}'.format(instance.uid, filename)

def user_directory_path_video_userRequest(instance, filename):
    return 'videos/userRequest/{}/{}'.format(instance.uid, filename)

def user_directory_path_detect(instance, filename):
    return 'images/detect/{}/{}'.format(instance.uid, filename)

class Cctv(models.Model):
    camid = models.CharField(primary_key=True, max_length=45)
    uid = models.ForeignKey(AuthUser, models.DO_NOTHING, db_column='uid')
    po_fire = models.IntegerField(blank=True, null=True)
    po_person = models.IntegerField(blank=True, null=True)
    po_person_cnt = models.IntegerField(blank=True, null=True)
    po_falldown = models.IntegerField(blank=True, null=True)
    po_helmet = models.IntegerField(blank=True, null=True)
    reg_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cctv'

class CamConnectHistory(models.Model):
    id = models.AutoField(primary_key=True)
    uid = models.ForeignKey(AuthUser, models.DO_NOTHING, db_column='uid')
    camid = models.CharField(max_length=45, blank=True, null=True)
    time = models.DateTimeField(blank=True, null=True)
    division = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cam_connect_history'

class Detect(models.Model):
    id = models.AutoField(primary_key=True)
    uid = models.ForeignKey(AuthUser, models.DO_NOTHING, db_column='uid')
    image1 = models.ImageField(upload_to=user_directory_path_detect)
    image2 = models.ImageField(upload_to=user_directory_path_detect)
    time = models.DateTimeField(blank=True, null=True)
    camid = models.CharField(max_length=45, blank=True, null=True)
    type = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'detect'

class Alarm(models.Model):
    id = models.AutoField(primary_key=True)
    uid = models.ForeignKey(AuthUser, models.DO_NOTHING, db_column='uid')
    did = models.ForeignKey(Detect, models.DO_NOTHING, db_column='did', blank=True, null=True)
    camid = models.CharField(max_length=45, blank=True, null=True)
    time = models.DateTimeField()
    confirm = models.IntegerField()
    type = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'alarm'

class CapturePicture(models.Model):
    cpid = models.AutoField(primary_key=True)
    uid = models.ForeignKey(AuthUser, models.DO_NOTHING, db_column='uid')
    image = models.ImageField(upload_to=user_directory_path_capture_userRequest)
    time = models.DateTimeField(blank=True, null=True)
    camid = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'capture_picture'

class RecordingVideo(models.Model):
    rvid = models.AutoField(primary_key=True)
    uid = models.ForeignKey(AuthUser, models.DO_NOTHING, db_column='uid')
    video = models.FileField(upload_to=user_directory_path_video_userRequest)
    time = models.DateTimeField(blank=True, null=True)
    camid = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'recording_video'

