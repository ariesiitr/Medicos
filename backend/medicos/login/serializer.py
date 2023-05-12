from rest_framework import serializers
from .models import Login

class DoctorSerializer(serializers.ModelSerializer):
    class Meta :
        model = Login
        exclude = ['created', 'updated','uniqueId']


