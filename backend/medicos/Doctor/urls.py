from django.urls import path
from .views import Signup

urlpatterns = [
    path('doctorlogin', Signup)
]