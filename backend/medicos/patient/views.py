from .serializer import PatientSerializer, PatientDetailsSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import Error
from utils.auth import auth
from .models import Patient
from Doctor.serializer import DocAppointmentsSerializer


# Create your views here.
@api_view(('GET','POST'))
def Signup(request):
    if request.method =='POST':
        data={}

        try:

            data = {"patientName" : request.data.get("patientName"),"gender" : request.data.get("gender"),"bloodGroup" : request.data.get("bloodGroup"),
                    "address" : request.data.get("address"),"state" : request.data.get("state"),"city" : request.data.get("city"),
                    "dob" : request.data.get("dob"),"password" : request.data.get("password"), "confirmPassword" : request.data.get("confirmPassword"),
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
              appointmentsDetails= Patient.objects.all()
              serializer = PatientDetailsSerializer(appointmentsDetails, many=True)
              data = serializer.data
              return Response({"data": data}, status=status.HTTP_200_OK)

@api_view(('GET','POST'))
def patientPastPresEntry(request):
    if request.method =='POST':
        data={}

        try:
             data = {"uniqueId" : request.data.get("uniqueId"),"docUniqueId" : request.data.get("docUniqueId"),"pastPrescription" : request.data.get("pastPrescription")
            }

             db_entry = PatientDetailsSerializer(data=data)          
             db_entry.is_valid(raise_exception=True)

             db_entry.save()
             return Response(data={"success":"data submitted"}, status=status.HTTP_200_OK) 
        
        except Error as e:
           print(e)
           return Response({"Faliure": "failure"}, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(('GET','POST'))
def patientPastPresEntry(request):
    if request.method =='GET':
         AuthToken = request.headers['Authorization']
          # .split('')[1]
         user = auth(AuthToken) 
         if user == None:
           return Response({"error": "Invalid Auth Token"}, status=status.HTTP_400_BAD_REQUEST)    

         else :
              prescriptionDetails= PatientDetails.objects.all().filter(uniqueId=user.uniqueId)
              serializer = PatientDetailsSerializer(prescriptionDetails, many=True)
              data = serializer.data
              return Response({"data": data}, status=status.HTTP_400_BAD_REQUEST)