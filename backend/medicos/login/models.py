from django.db import models
from django.utils import timezone

class Login(models.Model):
    uniqueId= models.CharField(max_length=50, default='')
    username = models.CharField(max_length=50)
    password= models.CharField(max_length=30)
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)


    def __str__(self):
     return self.doctorName
    
    class Meta:
        """
        Meta class for Doctor
        """
        verbose_name_plural = "Login"