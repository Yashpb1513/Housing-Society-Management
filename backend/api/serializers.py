from rest_framework import serializers
from .models import Usr, Announcements, Queries

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = Usr
    fields = ('name', 'email', 'password')

class AnnouncementSerializer(serializers.ModelSerializer):
  class Meta:
    model = Announcements
    fields = ('header', 'desc', 'time', 'date', 'image', 'disabled', 'alt')

class QueriesSerializer(serializers.ModelSerializer):
  class Meta:
    model = Queries
    fields = ('email', 'query')