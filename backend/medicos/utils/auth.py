import jwt 
from Doctor.models import Doctor
from patient.models import Patient
from clinic.models import Clinic
import environ

env = environ.Env()
environ.Env.read_env()

def auth(token):
    secret =  env("SECRET_KEY") 
    try:

        decoded = jwt.decode(token, secret, algorithms=['HS256'])
        
        contactNo = decoded['contactNo']
        password = decoded['contactNo']
        if Doctor.objects.filter(contactNo=contactNo ).exists():
            return Doctor.objects.get(contactNo=contactNo )
        elif Clinic.objects.filter(contactNo=contactNo).exists():
            return Clinic.objects.get(contactNo=contactNo)
        elif Patient.objects.filter(contactNo=contactNo).exists():
            return Patient.objects.get(contactNo=contactNo )

    except:
        return None