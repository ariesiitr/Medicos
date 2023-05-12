from django.urls import path
from .views import Signup, appointmentsOfPatient,patientPastPresEntry

urlpatterns = [
    path('patientlogin', Signup),
    path('patientappointdetails',appointmentsOfPatient),
    path('patientprescriptionsentry',patientPastPresEntry),

]