from rest_framework import serializers
from .models import Doctor, DocAppointments

class DoctorSerializer(serializers.ModelSerializer):
    class Meta :
        model = Doctor
        exclude = ['created', 'updated','uniqueId','authToken']

class DocAppointmentsSerializer(serializers.ModelSerializer):
    class Meta :
        model = DocAppointments
        exclude = ['created', 'updated',]