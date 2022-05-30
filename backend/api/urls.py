from django.contrib import admin
from django.urls import path
from .views import createUser, Announcement, query, getToken

urlpatterns = [
    path('api/', createUser),
    path('announce/', Announcement),
    path('query/', query),
    path('gettoken/', getToken)
]