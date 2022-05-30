from django.shortcuts import render
from django.conf import settings
import io
from rest_framework.parsers import JSONParser
from django.db.models.signals import post_save
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from django.dispatch import receiver
from matplotlib.font_manager import json_load
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Usr, Announcements, Queries, Complaints, Maintenance
from .serializers import UserSerializer, AnnouncementSerializer, QueriesSerializer, ComplaintsSerializer, MaintenanceSerializer
from rest_framework.status import *
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly 
                                 
# Create your views here.
@api_view(['GET', 'POST'])
def createUser(request):
  if request.method == 'POST':
    data = request.data
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
      serializer.save()
      print(serializer.data)
      # return Response(serializer.data)
      # user = User.objects.get(username=data.get('name'))
      if User.objects.filter(username=data.get('name')).exists():
        return Response({'message': 'User already exists', 'status': '400'}, status=HTTP_400_BAD_REQUEST)
      else:
        user = User.objects.create(
        username=data.get('name'),
        email=data.get('email'),
        password=data.get('password')
        )
        user.save()
        print("balle balle shava shava")
        token = Token.objects.get(user=user)
        print(token.key)
        return Response({'token': token.key})
    else:
      return Response(serializer.errors)
  if request.method == 'GET':
    users = Usr.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)
    
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False,
**kwargs):
 if created:
  Token.objects.create(user=instance)

@api_view(['GET', 'POST'])
def Announcement(request):
  if request.method == 'GET':
    announcements = Announcements.objects.all()
    serializer = AnnouncementSerializer(announcements, many=True)
    return Response(serializer.data)
  if request.method == 'POST':
    data = request.data
    serializer = AnnouncementSerializer(data=data)
    if serializer.is_valid():
      serializer.save()
      return Response({'message': 'Announcement Created', 'status': '200'})
    else:
      return Response(serializer.errors)


@api_view(['GET', 'POST'])
def query(request):
  if request.method == 'GET':
    queries = Queries.objects.all()
    serializer = QueriesSerializer(queries, many=True)
    return Response(serializer.data)
  if request.method == 'POST':
    json_data = request.body;
    stream = io.BytesIO(json_data)
    pythondata = JSONParser().parse(stream)
    serializer = QueriesSerializer(data=pythondata)
    print(serializer.initial_data)
    print(serializer.is_valid())
    if serializer.is_valid():
      serializer.save()
      print("yesssss")
      return Response({'message': 'Query Created', 'status': '200'})
    else:
      print(serializer.errors)
      return Response(serializer.errors)

@api_view(['GET', 'POST'])
def getToken(request):
  if request.method == 'POST':
    data = request.data
    name = data.get('name')
    password = data.get('password')
    if User.objects.filter(username=name).exists():
      user = authenticate(request, username=name, password=password)
      if user is not None:
        token = Token.objects.get(user=user)
        type = Usr.objects.get(name=name).type
        subtype = Usr.objects.get(name=name).subtype
        return Response({'token': token.key, 'type': type, 'subtype': subtype, 'name': name})
      else:
        return Response({'message': 'Invalid Credentials', 'status': '400'}, status=HTTP_400_BAD_REQUEST)
    else:
      return Response({'message': 'User does not exist', 'status': '400'}, status=HTTP_400_BAD_REQUEST)
      # user = User.objects.get(username=data.get('name'))
    #   if user is None:
    #     return Response({'message': 'Invalid Credentials', 'status': '404'})
    #   else:
    #     token = Token.objects.get(user=user)
    #     return Response({'token': token.key, 'status': '200'}, status=HTTP_400_BAD_REQUEST)
    # else:
    # return Response({'message': 'Invalid Credentials', 'status': '404'})

@api_view(['GET', 'POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def Complaint(request):
  # authentication_classes = (TokenAuthentication,)
  # permission_classes = (IsAuthenticated,)
  if request.method == 'GET':
    complaints = Complaints.objects.all()
    serializer = ComplaintsSerializer(complaints, many=True)
    return Response(serializer.data)
  if request.method == 'POST':
    json_data = request.body;
    stream = io.BytesIO(json_data)
    pythondata = JSONParser().parse(stream)
    serializer = ComplaintsSerializer(data=pythondata)
    print(serializer.initial_data)
    print(serializer.is_valid())
    if serializer.is_valid():
      serializer.save()
      print("yesssss")
      return Response({'message': 'Complaint Created', 'status': '200'})
    else:
      print(serializer.errors)
      return Response(serializer.errors)

@api_view(['GET', 'POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def Maintenances(request):
  # authentication_classes = (TokenAuthentication,)
  # permission_classes = (IsAuthenticated,)
  if request.method == 'GET':
    data = request.data
    name = data.get('name')
    if name is not None:
      maintenance = Maintenance.objects.filter(name=data.name)
      serializer = MaintenanceSerializer(maintenance, many=True)
      return Response(serializer.data)
    maintenance = Maintenance.objects.all()
    serializer = MaintenanceSerializer(maintenance, many=True)
    return Response(serializer.data)
  if request.method == 'POST':
    json_data = request.body;
    stream = io.BytesIO(json_data)
    pythondata = JSONParser().parse(stream)
    serializer = MaintenanceSerializer(data=pythondata)
    print(serializer.initial_data)
    print(serializer.is_valid())
    if serializer.is_valid():
      serializer.save()
      print("yesssss")
      return Response({'message': 'Maintenance Created', 'status': '200'})
    else:
      print(serializer.errors)
      return Response(serializer.errors)

