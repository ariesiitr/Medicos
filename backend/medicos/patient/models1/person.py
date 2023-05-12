from django.db import models
from django.utils import timezone
from patient.models import Patient
from Doctor.models import Doctor
from clinic.models import Clinic as Chemist

class person(models.Model):
    name=models.CharField(max_length=50,verbose_name="Name")
    email=models.EmailField(db_index=True,max_length=100,verbose_name="EMail Id")
    patient=models.ForeignKey(Patient,on_delete=models.CASCADE,blank=True,null=True)
    doctor=models.ForeignKey(Doctor,on_delete=models.CASCADE,blank=True,null=True)
    chemist=models.ForeignKey(Chemist,on_delete=models.CASCADE,blank=True,null=True)
    created=models.DateTimeField(default=timezone.now)
    updated=models.DateTimeField(auto_now=True)
    otp=models.CharField(max_length=6,blank=True,null=True)
    verified=models.BooleanField(default=True)
    def save(self, *args, **kwargs):
        if not self.created:
            self.created = timezone.now()

        self.updated = timezone.now()
        return super(person, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
    class Meta:
        
        verbose_name_plural = "persons"