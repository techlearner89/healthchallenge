from django.urls import path
from registration import views

urlpatterns = [
    path('login/', views.showLogin),
    path('signup/', views.SignUp.as_view(), name='signup'),


]