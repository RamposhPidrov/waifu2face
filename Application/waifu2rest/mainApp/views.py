from django.shortcuts import render
from rest_framework.generics import get_object_or_404
# Create your views here.
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

from .models import Person
from .serializers import *
import datetime

class FileUploadView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):

      file_serializer = PersonSerializer(data=request.data)

      if file_serializer.is_valid():
          file_serializer.save()
          return Response(file_serializer.data, status=status.HTTP_201_CREATED)
      else:
          return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OnePersonView(APIView):
    def get(self, request, pk):
        person = get_object_or_404(Person.objects.all(), pk=pk)
        serializer = PersonSerializer(person, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)

class PersonView(APIView):
    parser_class = (FileUploadParser,)

    def get(self, request):
        persons = Person.objects.all()
        serializer = PersonSerializer(persons, many=True)
        # return Response({"persons": serializer.data})
        return Response(serializer.data)


    def post(self, request, *args, **kwargs):
      file_serializer = PersonSerializer(data=request.data)
      if file_serializer.is_valid():
          file_serializer.save()
          return Response(file_serializer.data, status=status.HTTP_201_CREATED)
      else:
          return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        person = get_object_or_404(Person.objects.all(), pk=pk)
        serializer = PersonSerializer(person, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        # Get object with this pk
        person = get_object_or_404(Person.objects.all(), pk=pk)
        person.delete()
        return Response({
            "message": "Person with id `{}` has been deleted.".format(pk)
        }, status=204)



class LogView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
        file_serializer = EventSerializer(data=request.data)
        if file_serializer.is_valid():
            time=datetime.datetime.now()
            if LogFile.objects.filter(Q(name__icontains=datetime.date.today())).exists():
                log_file = LogFile.objects.filter(Q(name__icontains=datetime.date.today())).last()
            # file_serializer.action='123123'
            file_serializer.save(time=time, log_file=log_file)
            # LogEvent(event)
        

            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def LogEvent(event):
       pass

# #@csrf_exempt
# def person_list(request):
#     if request.method == 'GET':
#         persons = Person.objects.all()
#         persons_serializer = PersonSerializer(persons, many=True)
#         return JsonResponse(persons_serializer.data, safe=False)
#         # In order to serialize objects, we must set 'safe=False'
 
#     elif request.method == 'POST':
#         person_data = JSONParser().parse(request)
#         persons_serializer = PersonSerializer(data=person_data)
#         if persons_serializer.is_valid():
#             persons_serializer.save()
#             return JsonResponse(persons_serializer.data, status=status.HTTP_201_CREATED) 
#         return JsonResponse(persons_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     elif request.method == 'DELETE':
#         Person.objects.all().delete()
#         return HttpResponse(status=status.HTTP_204_NO_CONTENT)


# #@csrf_exempt 
# def person_detail(request, pk):
#     try: 
#         person = Person.objects.get(pk=pk) 
#     except Person.DoesNotExist: 
#         return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
 
#     if request.method == 'GET': 
#         persons_serializer = PersonSerializer(person) 
#         return JsonResponse(persons_serializer.data) 
 
#     elif request.method == 'PUT': 
#         person_data = JSONParser().parse(request) 
#         persons_serializer = PersonSerializer(person, data=person_data) 
#         if persons_serializer.is_valid(): 
#             persons_serializer.save() 
#             return JsonResponse(persons_serializer.data) 
#         return JsonResponse(persons_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
#     elif request.method == 'DELETE': 
#         person.delete() 
#         return HttpResponse(status=status.HTTP_204_NO_CONTENT)
