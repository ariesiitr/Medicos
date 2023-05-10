from django.urls import path
from .views import Signup , appointmentsByPatient

urlpatterns = [
    path('doctorlogin', Signup),
    path('bookAppointments', appointmentsByPatient)
]