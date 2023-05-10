from django.db import models
from django.utils import timezone
import jwt
from django.contrib.auth.hashers import make_password
import os
from django.conf import settings

SECRET_KEY = settings.SECRET_KEY

if os.environ.get('ENVIRONMENT') == 'production':
    SECRET_KEY = settings.SECRET_KEY

class Doctor(models.Model):
    docUniqueId= models.CharField(max_length=50, default='')
    doctorName = models.CharField(max_length=50)
    clinicName= models.CharField(max_length=50)
    contactNo = models.CharField(max_length=50, default="")
    license= models.ImageField
    speciality = models.CharField(max_length=50)
    address= models.CharField(max_length=250)
    appointmentstartTime= models.TimeField(auto_now=False, auto_now_add=False)
    appointmentendTime = models.TimeField(auto_now=False, auto_now_add=False)
    availableDays= models.CharField(max_length=50)
    appointmentFees = models.IntegerField(default=0, verbose_name="fee")
    upiId = models.CharField(max_length=50)
    password= models.CharField(max_length=30)
    confirmPassword = models.CharField(max_length=30)
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)
    jwt_secret = SECRET_KEY
    jwt_algorithm = "HS256"
    authToken = models.CharField(max_length=1000, blank=True, null=True)

    def __str__(self):
     return self.doctorName
    
    def save(self,*args, **kwargs):
       
       
       self.updated = timezone.now()

       self.authToken = jwt.encode({"contactNo": self.contactNo, "password": self.password,
                                    "updated": str(self.updated)}, self.jwt_secret, algorithm=self.jwt_algorithm)
       return super(Doctor, self).save(*args, **kwargs)
    
    class Meta:
        """
        Meta class for Doctor
        """
        verbose_name_plural = "Doctor"

class DocAppointments(models.Model):
   uniqueId= models.CharField(max_length=50, default='')
   appointmentTime = models.TimeField()
   appointmentDate= models.DateField()
   DocUniqueId = models.CharField(max_length=50, default='')
   created = models.DateTimeField(default=timezone.now)
   updated = models.DateTimeField(auto_now=True)
 

   def __str__(self):
     return self.DocUniqueId
   
   class Meta:
        """
        Meta class for DocAppointments
        """
        verbose_name_plural = "DocAppointments"
