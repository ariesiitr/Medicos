from .serializer import ClinicSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import Error
from .serializer import ClinicSerializer
from Doctor.models import Doctor
from clinic.models import Clinic
from patient.models import Patient

@api_view(('GET','POST'))
def SignupClinic(request):
     if request.method =='POST':
        data={}
       
        try: 
       
          data = {"chemistName": request.data.get(
            "chemistName"), "license": request.data.get("license"), "shopAddress" : request.data.get("shopAddress"),
              "upiId" : request.data.get("upiId"),"password" : request.data.get("password"), "storeName" : request.data.get("storeName"),
              "openingTime" : request.data.get("openingTime"),"closingTime" : request.data.get("closingTime"),
            }
        
          db_entry = ClinicSerializer(data=data)          
          db_entry.is_valid(raise_exception=True)
      
          db_entry.save()
          return Response(data={"success":"data submitted"}, status=status.HTTP_200_OK) 
        
        except Error as e:
         print(e)
         return Response({"Faliure": "failure"}, status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['POST'])
def Login(request):
        
        username = request.data.get('username')
        password = request.data.get('password')



        try:
                
            chemist_user = Clinic.objects.filter(contactNo=username).first()
            doctor_user = Doctor.objects.filter(contactNo=username).first()
            patient_user = Patient.objects.filter(contactNo=username).first()
            print(chemist_user)

        
            if chemist_user and chemist_user.check_password(password):
                return Response({'success': 'Chemist login successful'}, status=status.HTTP_200_OK)
            
            elif doctor_user and doctor_user.check_password(password):
                return Response({'success': 'Doctor login successful'}, status=status.HTTP_200_OK)
            
            elif patient_user and patient_user.check_password(password):
                return Response({'success': 'Patient login successful'}, status=status.HTTP_200_OK)

        except:
            pass       
        # Invalid credentials
        return Response({'failure': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
            

         # except Error as e:
        #  print(e.message)