from django.db import models
from phone_field import PhoneField
class Person(models.Model):
    f_name = models.CharField(max_length=255,verbose_name='First Name')
    l_name = models.CharField(max_length=30,verbose_name='Last Name')
    email = models.EmailField(max_length=255,unique=True,db_index=True,verbose_name='Email')
    mobile = PhoneField()


