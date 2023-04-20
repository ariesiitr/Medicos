from django.db import models
from django.utils import timezone

class   Clinic(models.Model):
    uniqueId= models.CharField(max_length=50, default='')
    chemistName = models.CharField(max_length=50)
    shopAddress= models.CharField(max_length=100)
    license= models.ImageField
    upiId = models.CharField(max_length=50)
    password= models.CharField(max_length=30)
    confirmPassword = models.CharField(max_length=30)
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
     return self.chemistName
    
    class Meta:
        """
        Meta class for Doctor
        """
        verbose_name_plural = "Clinic"