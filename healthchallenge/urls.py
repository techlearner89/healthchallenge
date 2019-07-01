from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView
from registration import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('registration.urls')),
    path('', TemplateView.as_view(template_name='index.html'), name='homepage'),

]
