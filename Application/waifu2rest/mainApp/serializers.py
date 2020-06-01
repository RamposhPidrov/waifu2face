from rest_framework import serializers
from .models import *
import datetime
from django.db.models import Q
from rest_framework.generics import get_object_or_404

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = "__all__"
# class PersonSerializer(serializers.Serializer):
#     class Meta:
#         name = serializers.CharField( max_length=100);
#         jobcode = serializers.CharField( max_length=100);
#         image = serializers.FileField()
#         image_crop = serializers.FileField()


    def create(self, validated_data):
        return Person.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # instance.body = validated_data.get('body', instance.body)
        instance.name = validated_data.get('name', instance.name)
        instance.jobcode = validated_data.get('jobcode', instance.jobcode)
        instance.image = validated_data.get('image', instance.image)
        instance.image_crop = validated_data.get('image_crop', instance.image_crop)

        instance.save()
        return instance

class LogFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = LogFile
        fields = "__all__"
    

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"

    def create(self, validated_data):
        
        print(validated_data)
        today = datetime.date.today()
        if LogFile.objects.filter(Q(name__icontains=today)).exists():
            logfileobj = LogFile.objects.filter(Q(name__icontains=today))[0]
            logfileobj.body += '\n[ {0} ] - {1} - {2} - {3}'.format(validated_data.get('log_type'), datetime.datetime.now(), validated_data.get('action'), validated_data.get('user'))
            logfileobj.Images += '\n{0}'.format(validated_data.get('image'))
            logfileobj.save()
        else:
            logfileobj = LogFile()
            logfileobj.name = today 
            logfileobj.body = '[ {0} ] - {1} - {2} - {3}'.format(validated_data.get('log_type'), datetime.datetime.now(), validated_data.get('action'), validated_data.get('user'))
            logfileobj.Images = validated_data.get('image')
            # instance.save()
            
            logfileobj.save()


        return Event.objects.create(**validated_data)
