from django.contrib import admin
from django.urls import path
from .views import createUser, Announcement, query, getUser

urlpatterns = [
    path('api/', createUser),
    path('announce/', Announcement),
    path('query/', query),
    path('getuser/', getUser)
]