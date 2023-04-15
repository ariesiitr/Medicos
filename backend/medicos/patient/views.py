from .serializer import PatientSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import Error


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
        
