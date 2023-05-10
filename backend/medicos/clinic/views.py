from .serializer import ClinicSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import Error
from .serializer import ClinicSerializer

@api_view(('GET','POST'))
def SignupClinic(request):
     if request.method =='POST':
        data={}
       
        try: 
       
          data = {"chemistName": request.data.get(
            "chemistName"), "license": request.data.get("license"), "shopAddress" : request.data.get("shopAddress"),
              "upiId" : request.data.get("upiId"),"password" : request.data.get("password"), "confirmPassword" : request.data.get("confirmPassword"),"contactNo": request.data.get("contactNo"),
            }
        
          db_entry = ClinicSerializer(data=data)          
          db_entry.is_valid(raise_exception=True)
      
          db_entry.save()
          return Response(data={"success":"data submitted"}, status=status.HTTP_200_OK) 
        
        except Error as e:
         print(e)
         return Response({"Faliure": "failure"}, status=status.HTTP_400_BAD_REQUEST)
        

         # except Error as e:
        #  print(e.message)