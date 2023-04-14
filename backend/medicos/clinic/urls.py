from django.urls import path
from .views import SignupClinic

urlpatterns = [
    path('chemistlogin', SignupClinic)
]