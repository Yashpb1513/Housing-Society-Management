from rest_framework import serializers
from .models import Usr, Announcements, Queries, Complaints, Maintenance

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = Usr
    fields = ('name', 'email', 'password', 'type', 'subtype')

class AnnouncementSerializer(serializers.ModelSerializer):
  class Meta:
    model = Announcements
    fields = ('header', 'desc', 'time', 'date', 'image', 'disabled', 'alt')

class QueriesSerializer(serializers.ModelSerializer):
  class Meta:
    model = Queries
    fields = ('email', 'query')

class ComplaintsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Complaints
    fields = ('flat', 'comp')

class MaintenanceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Maintenance
    fields = ('flat', 'cheque', 'amount', 'date', 'ack')