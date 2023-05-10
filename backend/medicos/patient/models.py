from django.db import models
from django.utils import timezone
import jwt
import os
from django.conf import settings

SECRET_KEY = settings.SECRET_KEY

if os.environ.get('ENVIRONMENT') == 'production':
    SECRET_KEY = settings.SECRET_KEY

# Create your models here.
class Patient(models.Model):
    uniqueId= models.CharField(max_length=50, default='')
    patientName = models.CharField(max_length=50)
    dob = models.DateField()
    contactNo = models.CharField(max_length=50, default="")
    password= models.CharField(max_length=30)
    confirmPassword = models.CharField(max_length=30)
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)
    jwt_secret = SECRET_KEY
    jwt_algorithm = "HS256"
    authToken = models.CharField(max_length=1000, blank=True, null=True)


    def __str__(self):
     return self.patientName

    def save(self,*args, **kwargs):
       
       self.docUniqueId = "PaTt" +  str(self.contactNo)  

       self.updated = timezone.now()

       self.authToken = jwt.encode({"contactNo": self.contactNo, "password": self.password,
                                    "updated": str(self.updated)}, self.jwt_secret, algorithm=self.jwt_algorithm)
       return super(Patient, self).save(*args, **kwargs)
