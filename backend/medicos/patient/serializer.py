from rest_framework import serializers
from .models import Patient, PatientDetails
from .models1.otp import OTP
from .models1.person import person
from Doctor.models import Doctor
from clinic.models import Clinic


class PatientSerializer(serializers.ModelSerializer):
    class Meta :
        model = Patient
        exclude = ['created', 'updated','uniqueId']

class PatientDetailsSerializer(serializers.ModelSerializer):
   class Meta :
        model = PatientDetails
        exclude = ['created','updated']

class DoctorSerializer(serializers.ModelSerializer):
    class Meta :
        model = Doctor
        exclude = ['created', 'updated','uniqueId','authToken']

class ClinicSerializer(serializers.ModelSerializer):
    class Meta :
        model = Clinic
        exclude = ['created', 'updated','uniqueId','authToken']

class otpSerializer(serializers.ModelSerializer):
    class Meta:
        model = OTP
        exclude = ["id","date_created" ,"date_expired"]

class PearsonSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = person
        fields = ["name", "email", "patient","doctor"]