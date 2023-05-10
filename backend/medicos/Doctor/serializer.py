from rest_framework import serializers
from .models import Doctor, DocAppointments

class DoctorSerializer(serializers.ModelSerializer):
    class Meta :
        model = Doctor
        exclude = ['created', 'updated','docUniqueId','authToken']

class DocAppointmentsSerializer(serializers.ModelSerializer):
    appointmentTime = serializers.CharField()
    class Meta :
        model = DocAppointments
        fields=['uniqueId','DocUniqueId','appointmentTime','appointmentDate',]
        