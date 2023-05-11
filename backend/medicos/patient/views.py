from .serializer import PatientSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import Error
from utils.auth import auth
from Doctor.models import DocAppointments
from Doctor.serializer import DocAppointmentsSerializer


# Create your views here.
@api_view(('GET','POST'))
def Signup(request):
    if request.method =='POST':
        data={}

        try:

            data = {"patientName" : request.data.get("patientName"),"dob" : request.data.get("dob"),"password" : request.data.get("password"), "confirmPassword" : request.data.get("confirmPassword"),
            "contactNo": request.data.get("contactNo")}

            db_entry = PatientSerializer(data=data)          
            db_entry.is_valid(raise_exception=True)

            db_entry.save()
            return Response(data={"success":"data submitted"}, status=status.HTTP_200_OK) 
        
        except Error as e:
         print(e)
         return Response({"Faliure": "failure"}, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(('GET','POST'))
def appointmentsOfPatient(request):
    if request.method =='GET':
          AuthToken = request.headers['Authorization'].split(' ')[0]
          user = auth(AuthToken) 
          print(AuthToken)
          print(user)
          if user == None:
           return Response({"error": "Invalid Auth Token"}, status=status.HTTP_400_BAD_REQUEST)    

          else :
              print(user)
              appointmentsDetails= DocAppointments.objects.all().filter(uniqueId=user.uniqueId)
              serializer = DocAppointmentsSerializer(appointmentsDetails, many=True)
              data = serializer.data
              return Response({"data": data}, status=status.HTTP_400_BAD_REQUEST)
              