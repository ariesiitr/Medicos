from .serializer import PatientSerializer, PatientDetailsSerializer, PearsonSerializer, otpSerializer, DoctorSerializer, ClinicSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import Error
from utils.auth import auth
from Doctor.models import DocAppointments
from .models import PatientDetails,Patient
from .block import block_mail
from Doctor.serializer import DocAppointmentsSerializer
from rest_framework.views import APIView
import pyotp
from .models1.person import person
from patient.tasks import send_feedback_email_task




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

class OtpView(APIView):

    def post(self, request):

        totp = pyotp.TOTP('base32secret3232')
        otp = totp.now()
        print("x",otp)
        mail = request.data.get('email', None)
        if (block_mail(mail,'')):
            return Response({'error_msg': 'Blocked Credentials'}) 
        personi = Patient.objects.filter(email=mail)

        if len(personi) == 0:
            return Response({"error": "email not registered"}, status=400)
        else:
            personi = personi[0]
            personi.otp = otp
            personi.save()
            mail = personi.email
            message = "Your OTP is <b>" + otp + "</b>"
            send_feedback_email_task.delay(
                mail, message, 'Your OTP is '
            )
            return Response("Successful", status=200)
        

@api_view(('GET', 'POST'))
def OtpSignupView(request):
    if request.method == 'GET':
        return Response(status=status.HTTP_200_OK)
    elif request.method == 'POST':
        email = request.data["user"]['email']
        name = request.data["user"]['full_name']
        totp = pyotp.TOTP('base32secret3232')
        otp = totp.now()
    
        if block_mail(email,''):
            return Response('Blocked Credentials')  
        if person.objects.filter(email=email).exists():
            personi = Patient.objects.get(email=email)
            personi.verified = False

            personi.otp = otp
            personi.save()
            message = "Your OTP is <b>" + otp + "</b>"
            send_feedback_email_task.delay(
                email, message, 'Your OTP for esummit account'
            )
            return Response({"message": "user intilized"}, status=status.HTTP_201_CREATED)
        saver = False
        db_entry = ""

        db_entry_person = PearsonSerializer
        data = request.data["user"]
        userType = request.data.get('type')
        db_entry = ""

        data["password"] = "medicos"+str(otp)
        if userType == "patient":
            db_entry = PatientSerializer(data=data)
        elif userType == "doctor":
            data["clinic_name"] = data["clinic"]
            del data["clinic"]
            db_entry = DoctorSerializer(data=data)
        elif userType == "chemist":
            db_entry = ClinicSerializer(data=data)

        if db_entry.is_valid(raise_exception=True):
            saver = db_entry.save()
            data2 = {"email": email, "name": name}
            if userType == "patient":
                data2["patient"] = saver.pk
            elif userType == "doctor":
                data2["doctor"] = saver.pk
            elif userType == "chemist":
                data2["chemist"] = saver.pk

            db_entry_person = PearsonSerializer(data=data2)

            db_entry_person.is_valid()
            personi = db_entry_person.save()
            personi.verified = False

            personi.otp = otp
            personi.save()
            message = "Your OTP is <b>" + otp + "</b>"
            send_feedback_email_task.delay(
                email, message, 'Your OTP for esummit account'
            )
            return Response({"message": "user intilized"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"Faliure": str(db_entry.errors)}, status=status.HTTP_400_BAD_REQUEST)
        

@api_view(('GET', 'POST'))
def OTPSignupVerify(request):
    if request.method == 'GET':
        return Response(status=status.HTTP_200_OK)
    elif request.method == 'POST':

        data = request.data

        otp = data.get('otp', None)
        email = data.get('email', None)

        if block_mail(email,''):
            return Response({'error': 'Unauthorized'},status=status.HTTP_401_UNAUTHORIZED)  
        else :
         if not otp:
          return Response('OTP cannot be empty!', status=status.HTTP_400_BAD_REQUEST)
         if not email:



            return Response('Email cannot be empty!', status=status.HTTP_400_BAD_REQUEST)

         else:
            personi = Patient.objects.filter(email=email)
            if len(personi) == 0:
                return Response("email not registered", status=400)
            else:
                personi = personi[0]
                user = ""
                if personi.otp == otp:
                    personi.otp = ""
                    personi.verified = True
                    personi.save()
                    if personi.patient:
                        user = personi.patient
                    elif personi.doctor:
                        user = personi.doctor
                    elif personi.chemist:
                        user = personi.chemist

                    at = user.authToken
                    data5 = {"n": user.patientName,
                             'at': at[2:-1], 'role': "pat", "e_id": user.uniqueId}
                    if personi.doctor:
                        data5["role"] = "doctor"
                    elif personi.chemist:
                        data5["role"] = "chemist"
                    return Response(data5, status=status.HTTP_200_OK)

                else:
                    return Response("Wrong OTP", status=400)