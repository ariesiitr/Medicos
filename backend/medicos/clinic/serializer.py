from rest_framework import serializers
from .models import Clinic

class ClinicSerializer(serializers.ModelSerializer):
    class Meta :
        model = Clinic
        exclude = ['created', 'updated','uniqueId','authToken']