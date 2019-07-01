from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, render_to_response
from django.views import View
from django.views.generic import CreateView
from person.models import Person

def index(request):
    return HttpResponse('Hello world from Rahul.')


def showLogin(request):
    return render(request,'login.html')


class SignUp(CreateView):
    # template_name = 'sign_up.html'
    def get(self, request, *args, **kwargs):
        return render(request, 'sign_up.html')

    def post(self, request, *args, **kwargs):
        fnamev = request.POST.get('fname',None)
        lnamev = request.POST.get('lname',None)
        emailv = request.POST.get('email',None)
        phonenov = request.POST.get('phoneno',None)
        passwordv = request.POST.get('password',None)
        cpasswordv = request.POST.get('cpassword',None)
        if(len(fnamev)<3):
            fnameError = 'Name must contain min 3 characters.'
        myDict = {'fnameError':fnameError}
        print(fnamev)
        print(lnamev)
        print(emailv)
        print(phonenov)
        print(passwordv)
        print(cpasswordv)
        return render(request,'sign_up.html',)
        # print(request.POST['fname'])


        # person = Person(
        #     f_name=request.POST['fname'],
        #     l_name=request.POST['lname'],
        #     email=request.POST['email'],
        #     mobile=request.POST['phoneno'],
        #     # password=request.POST['password']
        # )
        # person.save()
        return HttpResponse({'user': 'Rahul Nolakha'})

