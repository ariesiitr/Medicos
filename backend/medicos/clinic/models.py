from django.db import models
from django.utils import timezone
import jwt
import os
from django.conf import settings

SECRET_KEY = settings.SECRET_KEY


if os.environ.get('ENVIRONMENT') == 'production':
    SECRET_KEY = settings.SECRET_KEY

class   Clinic(models.Model):
    uniqueId= models.CharField(max_length=50, default='')
    chemistName = models.CharField(max_length=50,default="")
    shopAddress= models.CharField(max_length=100,default="")
    license= models.ImageField
    storeName=  models.CharField(max_length=100,default="")
    openingTime=models.CharField(max_length=10,default="") 
    closingTime= models.CharField(max_length=10,default="") 
    upiId = models.CharField(max_length=50,default="")
    password= models.CharField(max_length=30,default="")
    contactNo= models.CharField(max_length=15, default='')
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)
    jwt_secret = SECRET_KEY
    jwt_algorithm = "HS256"
    authToken = models.CharField(max_length=1000, blank=True, null=True)

    def __str__(self):
     return self.chemistName
    def save(self,*args, **kwargs):
       
       self.docUniqueId = "ClIc" +  str(self.contactNo)  

       self.updated = timezone.now()

       self.authToken = jwt.encode({"contactNo": self.contactNo, "password": self.password,
                                    "updated": str(self.updated)}, self.jwt_secret, algorithm=self.jwt_algorithm)
       return super(Clinic, self).save(*args, **kwargs)

    
    def check_password(self, password):
        return self.password==password

    class Meta:
        """
        Meta class for Doctor
        """
        verbose_name_plural = "Clinic"