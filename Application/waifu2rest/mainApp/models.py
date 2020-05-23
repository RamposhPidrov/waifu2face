from django.db import models

# Create your models here.
#from .models import Person

class Person(models.Model):
    # name = models.CharField(blank=True, max_length=100);

    image = models.FileField(blank=True, null=False)
    # image_crop = models.FileField(blank=True, null=False)

    def __str__(self):
        # return self.name
        return self.image.name

