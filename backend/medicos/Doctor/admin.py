from django.contrib import admin
from .models import Doctor, DocAppointments

# Register your models here.

class DoctorAdmin(admin.ModelAdmin):
    exclude=('confirmPassword',)
    
class DocAppointmentsAdmin(admin.ModelAdmin):
    exclude=('updated',)

admin.site.register(Doctor,DoctorAdmin)
admin.site.register(DocAppointments,DocAppointmentsAdmin)