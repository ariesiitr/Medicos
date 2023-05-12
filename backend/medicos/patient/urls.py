from django.urls import path
from .views import Signup, appointmentsOfPatient,patientPastPresEntry, OtpView, OtpSignupView

urlpatterns = [
    path('patientlogin', Signup),
    path('patientappointdetails',appointmentsOfPatient),
    path('patientprescriptionsentry',patientPastPresEntry),
    path('otp',OtpView.as_view()),
    path('otp_signup', OtpSignupView),
]