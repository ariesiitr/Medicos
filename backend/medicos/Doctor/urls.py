from django.urls import path
from .views import Signup , appointmentsByPatient, DocappointmentsDetails

urlpatterns = [
    path('doctorlogin', Signup),
    path('bookAppointments', appointmentsByPatient),
    path('doctorAppointDetails',DocappointmentsDetails),
]