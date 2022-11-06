from django.db import models

class Weather(models.Model):
    port_reg_time = models.CharField(primary_key=True, max_length=45)
    pty = models.CharField(max_length=45, blank=True, null=True)
    sky = models.CharField(max_length=45, blank=True, null=True)
    vec = models.IntegerField(blank=True, null=True)
    wsd = models.IntegerField(blank=True, null=True)
    t1h = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'weather'

# hash값은 그 뭐냐 타이틀로 하겠어요!
class NewsData(models.Model):
    num = models.AutoField(primary_key=True)
    hash_num =models.IntegerField(unique=True)
    news_title = models.TextField()
    news_url= models.TextField()
    news_content =models.TextField()
    news_date = models.DateTimeField() 
    class Meta:
        db_table = 'news'
        managed = False
