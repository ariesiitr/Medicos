from .serializer import DoctorSerializer, DocAppointmentsSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import Error
from .models import Doctor, DocAppointments
from patient.models import Patient
from clinic.models import Clinic
from utils.auth import auth

@api_view(('GET','POST'))
def Signup(request):
     if request.method =='POST':
      data={}
      contactNo = request.data.get('contactNo')
      if Doctor.objects.filter(contactNo=contactNo).exists() or Patient.objects.filter(contactNo=contactNo).exists() or Clinic.objects.filter(contactNo=contactNo).exists()  :
          return Response({"contactNo": "contactNo already registered"}, status=status.HTTP_400_BAD_REQUEST)
       
      try: 
       
          data = {"doctorName" : request.data.get("doctorName"),"availableDays" : request.data.get("availableDays"),"clinicName": request.data.get(
            "clinicName"), "license": request.data.get("license"), "speciality" : request.data.get("speciality"), "address" : request.data.get("address")
            , "appointmentstartTime" : request.data.get("appointmentstartTime"), "appointmentendTime" : request.data.get("appointmentendTime"), "appointmentFees" : request.data.get("appointmentFees"),
              "upiId" : request.data.get("upiId"),"password" : request.data.get("password"), "confirmPassword" : request.data.get("confirmPassword"),
            "contactNo": request.data.get("contactNo")}
         
          db_entry = DoctorSerializer(data=data)          
          db_entry.is_valid(raise_exception=True)
      
          db_entry.save()
          return Response(data={"success":"data submitted"}, status=status.HTTP_200_OK) 
        
      except Error as e:
         return Response({"Faliure": "failure"}, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(('GET','POST'))
def appointmentsByPatient(request):
      if request.method =='POST':
         data={}
       
      try: 
       
          data = {"uniqueId" : request.data.get("uniqueId"),"appointmentTime" : request.data.get("appointmentTime"),"appointmentDate": request.data.get(
            "appointmentDate"), "DocUniqueId": request.data.get("DocUniqueId")}
         
          db_entry = DocAppointmentsSerializer(data=data)          
          db_entry.is_valid(raise_exception=True)
      
          db_entry.save()
          return Response(data={"success":"data submitted"}, status=status.HTTP_200_OK) 
      except Error as e:
         print(e)
         return Response({"Faliure": "failure"}, status=status.HTTP_400_BAD_REQUEST)
      
     
@api_view(('GET','POST'))
def DocappointmentsDetails(request):
          if request.method=='GET':
              appointmentsDetails = DocAppointments.objects.all()
              serializer = DocAppointmentsSerializer(appointmentsDetails, many=True)
              data = serializer.data
              return Response({"data": data}, status=status.HTTP_200_OK)
