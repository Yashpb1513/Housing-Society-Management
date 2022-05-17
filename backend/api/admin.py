from django.contrib import admin
from .models import Usr

# Register your models here.
@admin.register(Usr)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'password')