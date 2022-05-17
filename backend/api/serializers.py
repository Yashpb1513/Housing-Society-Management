from rest_framework import serializers
from .models import Usr

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = Usr
    fields = ('name', 'email', 'password')