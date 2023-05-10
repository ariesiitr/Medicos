from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import check_password as auth_check_password


class Doctor(models.Model):
    uniqueId= models.CharField(max_length=50, default='')
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

    def check_password(self, password):
        # Use the auth_check_password method to check the password
        return auth_check_password(password, self.password)

    def __str__(self):
     return self.doctorName
    
    class Meta:
        """
        Meta class for Doctor
        """
        verbose_name_plural = "Doctor"