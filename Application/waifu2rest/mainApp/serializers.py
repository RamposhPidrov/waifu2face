from rest_framework import serializers
from .models import Person

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
