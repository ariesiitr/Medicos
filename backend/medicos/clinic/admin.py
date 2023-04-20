from django.contrib import admin
from .models import Clinic

# Register your models here.

class ClinicAdmin(admin.ModelAdmin):
    exclude=('confirmPassword',)
    


admin.site.register(Clinic,ClinicAdmin)