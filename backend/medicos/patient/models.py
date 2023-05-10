from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import check_password as auth_check_password


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

    def __str__(self):
     return self.patientName

    def check_password(self, password):
        # Use the auth_check_password method to check the password
     return auth_check_password(password, self.password)


