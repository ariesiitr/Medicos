from django.db import models
from django.utils import timezone


class  Order(models.Model):
    uniqueId= models.CharField(max_length=50, default='')
    order = models.CharField(max_length=50)
    orderTime= models.CharField(max_length=100)
    status = models.CharField(max_length=50, default="")
    chemistAddress= models.ImageField
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)
    

    def __str__(self):
     return self.order

  
    
    class Meta:
        """
        Meta class for Doctor
        """
        verbose_name_plural = "Order"

