from django.contrib import admin
from .models import Patient, PatientDetails

class PatientAdmin(admin.ModelAdmin):
    exclude=('confirmPassword',)

admin.site.register(Patient,PatientAdmin)
admin.site.register(PatientDetails)