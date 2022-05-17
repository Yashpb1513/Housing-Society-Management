from django.shortcuts import render
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Usr
from .serializers import UserSerializer
from rest_framework.status import *
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
      user = User.objects.get(username=data.get('name'))
      if user is None:
        user = User.objects.create(
        username=data.get('name'),
        email=data.get('email'),
        password=data.get('password')
        )
        user.save()
        token = Token.objects.get(user=user)
        print(token.key)
        return Response({'token': token.key})
      else:
        return Response({'message': 'User already exists', 'status': '400'}, status=HTTP_400_BAD_REQUEST)
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