from django.db import models
from matplotlib import image

# Create your models here.
class Usr(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    subtype = models.CharField(max_length=100, default="none")

class Announcements(models.Model):
    header = models.CharField(max_length=100)
    desc = models.CharField(max_length=100)
    time = models.CharField(max_length=100)
    date = models.DateField()
    image = models.CharField(max_length=100)
    disabled = models.BooleanField(default=False)
    alt = models.CharField(max_length=100)

class Queries(models.Model):
    email = models.CharField(max_length=100)
    query = models.CharField(max_length=100)

class Complaints(models.Model):
    flat = models.CharField(max_length=100)
    comp = models.CharField(max_length=100)

class Maintenance(models.Model):
    flat = models.CharField(max_length=100)
    cheque = models.CharField(max_length=100)
    amount = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)
    ack = models.BooleanField(default=False)
