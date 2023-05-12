from django.contrib import admin
from .models import Patient, PatientDetails
from .models1.otp import OTP

class PatientAdmin(admin.ModelAdmin):
    exclude=('confirmPassword',)

admin.site.register(Patient,PatientAdmin)
admin.site.register(OTP)
admin.site.register(PatientDetails)