from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from Doctor.models import Doctor
from clinic.models import Clinic
from patient.models import Patient

@api_view(['POST'])
def Login(request):
        # Retrieve username and password from request data
        username = request.data.get('username')
        password = request.data.get('password')

        # Query the user models to retrieve the user
        chemist_user = Clinic.objects.filter(contactNo=username).first()
        doctor_user = Doctor.objects.filter(contactNo=username).first()
        patient_user = Patient.objects.filter(contactNo=username).first()

        # Verify user credentials for chemist, doctor, and patient
        if chemist_user and chemist_user.check_password(password):
            return Response({'success': 'Chemist login successful'}, status=status.HTTP_200_OK)
        
        elif doctor_user and doctor_user.check_password(password):
            return Response({'success': 'Doctor login successful'}, status=status.HTTP_200_OK)
        
        elif patient_user and patient_user.check_password(password):
            return Response({'success': 'Patient login successful'}, status=status.HTTP_200_OK)
        
        # Invalid credentials
        return Response({'failure': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
