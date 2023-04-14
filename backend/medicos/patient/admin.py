from django.contrib import admin
from .models import Patient

class PatientAdmin(admin.ModelAdmin):
    exclude=('confirmPassword',)

admin.site.register(Patient,PatientAdmin)