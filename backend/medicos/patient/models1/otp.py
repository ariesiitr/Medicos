from email.policy import default
from django.db import models
from django.utils import timezone


class OTP(models.Model):
    Email = models.EmailField()
    Otp = models.CharField(max_length=15)
    date_created = models.DateTimeField(default=timezone.now)
    date_expired = models.DateTimeField()
