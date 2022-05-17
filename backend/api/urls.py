from django.contrib import admin
from django.urls import path
from .views import createUser

urlpatterns = [
    path('api/', createUser),
]