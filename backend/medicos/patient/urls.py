from django.urls import path
from .views import Signup, appointmentsOfPatient

urlpatterns = [
    path('patientlogin', Signup),
    path('patientappointdetails',appointmentsOfPatient),
]