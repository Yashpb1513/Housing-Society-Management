from django.contrib import admin
from django.urls import path
from .views import createUser, Announcement, query, getToken, Complaint, Maintenances

urlpatterns = [
    path('api/', createUser),
    path('announce/', Announcement),
    path('query/', query),
    path('gettoken/', getToken),
    path('complain/', Complaint),
    path('maint/', Maintenances)
]