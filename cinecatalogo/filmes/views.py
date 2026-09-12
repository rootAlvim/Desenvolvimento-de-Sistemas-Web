from django.shortcuts import render
# Create your views here.

def home(request):
    return render(request,'filmes/pages/home.html',status=201)
