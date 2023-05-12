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
    patientName = models.CharField(max_length=50,default='')
    dob = models.DateField()
    bloodGroup = models.CharField(max_length=10,default='')
    address = models.CharField(max_length=100,default='')
    state= models.CharField(max_length=100,default='')
    city=models.CharField(max_length=100,default='')
    gender= models.CharField(max_length=15, default='')
    contactNo = models.CharField(max_length=50, default="")
    password= models.CharField(max_length=30,default='')
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)
    jwt_secret = SECRET_KEY
    jwt_algorithm = "HS256"
    authToken = models.CharField(max_length=1000, blank=True, null=True)


    def __str__(self):
     return self.contactNo

    def save(self,*args, **kwargs):
      
       
       self.uniqueId = "PaTt" +  str(self.contactNo)  
       
       self.updated = timezone.now()

       self.authToken = jwt.encode({"contactNo": self.contactNo, "password": self.password,
                                    "updated": str(self.updated)}, self.jwt_secret, algorithm=self.jwt_algorithm)
       print(self.authToken)
       return super(Patient, self).save(*args, **kwargs)


class PatientDetails(models.Model):
   uniqueId= models.CharField(max_length=50, default='')
   docUniqueId= models.CharField(max_length=50, default='')
   pastPrescription= models.ImageField
   created = models.DateTimeField(default=timezone.now)
   updated = models.DateTimeField(auto_now=True)

   def __str__(self):
     return self.uniqueId
   
   class Meta:
        """
        Meta class for PatientDetails
        """
        verbose_name_plural = "PatientDetails"




class BlockMail(models.Model):
   blockmail=models.CharField( db_index=True, max_length=100, unique=True, verbose_name="Email")
   user = models.CharField(default="",max_length=100)
   class Meta:
        """
        Meta class for BlockMail
        """
        verbose_name_plural = 'BlockMail'

   def __str__(self):
        return self.blockmail

class BlockNumber(models.Model):
   blocknumber=models.CharField( db_index=True, max_length=100, unique=True, verbose_name="Number")
   user = models.CharField(default="",max_length=100)
   class Meta:
        """
        Meta class for BlockNumber
        """
        verbose_name_plural = 'BlockNumber'

   def __str__(self):
        return self.blocknumber