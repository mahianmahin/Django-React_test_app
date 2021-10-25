from django.db.models import fields
from rest_framework import serializers

from .models import *


class UserSeriliazer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"
