from django.db import models


class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=300)
    city = models.CharField(max_length=10)
