from django.urls import path
from .views import SignupClinic,ChemistDetails

urlpatterns = [
    path('chemistlogin', SignupClinic),
    path('chemistDetails', ChemistDetails)

]