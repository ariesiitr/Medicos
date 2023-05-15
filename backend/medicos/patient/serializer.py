from rest_framework import serializers
from .models import Patient, PatientDetails

class PatientSerializer(serializers.ModelSerializer):
    class Meta :
        model = Patient
        exclude = ['created', 'updated','uniqueId']

class PatientDetailsSerializer(serializers.ModelSerializer):
   class Meta :
        model = Patient
        exclude = ['created','updated']
      
