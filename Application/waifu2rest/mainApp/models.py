from django.db import models

# Create your models here.
#from .models import Person

class Person(models.Model):
    name = models.CharField(blank=True, max_length=100)
    jobcode = models.CharField(blank=True, max_length=100)

    image = models.FileField(blank=True, null=False)
    image_crop = models.FileField(blank=True, null=False)

    def __str__(self):
        return self.name
        #return self.image.name

class LogFile(models.Model):
    name = models.CharField(blank=True, max_length=100)
    body = models.TextField()
    Images = models.TextField()
    def __str__(self):
        return self.name

class Event(models.Model):
    log_type = models.CharField(blank=True, max_length=100)
    action = models.CharField(blank=True, max_length=100)
    body = models.CharField(blank=True, max_length=150)
    user = models.CharField(blank=True, max_length=100)
    time = models.CharField(blank=True, max_length=100)
    image = models.FileField(blank=True, null=False)
    log_file=models.ForeignKey(LogFile, on_delete=models.CASCADE, blank=True, null=True)
    def __str__(self):
        return '[ {0} ] - {1}'.format(self.log_type, self.time)

