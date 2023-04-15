from .serializer import DoctorSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import Error

@api_view(('GET','POST'))
def Signup(request):
     if request.method =='POST':
        data={}
       
        try: 
       
          data = {"doctorName" : request.data.get("doctorName"),"availableDays" : request.data.get("availableDays"),"clinicName": request.data.get(
            "clinicName"), "license": request.data.get("license"), "speciality" : request.data.get("speciality"), "address" : request.data.get("address")
            , "appointmentstartTime" : request.data.get("appointmentstartTime"), "appointmentendTime" : request.data.get("appointmentendTime"), "fees" : request.data.get("fees"),
              "upiId" : request.data.get("upiId"),"password" : request.data.get("password"), "confirmPassword" : request.data.get("confirmPassword"),
            "contactNo": request.data.get("contactNo")}
        
          db_entry = DoctorSerializer(data=data)          
          db_entry.is_valid(raise_exception=True)
      
          db_entry.save()
          return Response(data={"success":"data submitted"}, status=status.HTTP_200_OK) 
        
        except Error as e:
         print(e)
         return Response({"Faliure": "failure"}, status=status.HTTP_400_BAD_REQUEST)
        

         # except Error as e:
        #  print(e.message)