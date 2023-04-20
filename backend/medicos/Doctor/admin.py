from django.contrib import admin
from .models import Doctor

# Register your models here.

class DoctorAdmin(admin.ModelAdmin):
    exclude=('confirmPassword',)
    


admin.site.register(Doctor,DoctorAdmin)