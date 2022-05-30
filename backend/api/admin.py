from django.contrib import admin
from .models import Usr, Announcements, Queries, Complaints, Maintenance

# Register your models here.
@admin.register(Usr)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'password', 'type', 'subtype')

@admin.register(Announcements)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('id', 'header', 'desc', 'time', 'date', 'image', 'disabled', 'alt')

@admin.register(Queries)
class QueriesAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'query')

@admin.register(Complaints)
class ComplaintsAdmin(admin.ModelAdmin):
    list_display = ('id', 'flat', 'comp')

@admin.register(Maintenance)
class MaintenanceAdmin(admin.ModelAdmin):
    list_display = ('id', 'flat', 'cheque', 'amount', 'date', 'ack')