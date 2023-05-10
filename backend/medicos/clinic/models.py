from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import check_password as auth_check_password

class   Clinic(models.Model):
    uniqueId= models.CharField(max_length=50, default='')
    chemistName = models.CharField(max_length=50)
    shopAddress= models.CharField(max_length=100)
    contactNo = models.CharField(max_length=50, default="")
    license= models.ImageField
    upiId = models.CharField(max_length=50)
    password= models.CharField(max_length=30)
    confirmPassword = models.CharField(max_length=30)
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
     return self.chemistName

    def check_password(self, password):
        # Use the auth_check_password method to check the password
     return auth_check_password(password, self.password)
    
    class Meta:
        """
        Meta class for Doctor
        """
        verbose_name_plural = "Clinic"