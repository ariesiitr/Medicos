from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):
    class Meta :
        model = Patient
        exclude = ['created', 'updated','uniqueId','authToken']