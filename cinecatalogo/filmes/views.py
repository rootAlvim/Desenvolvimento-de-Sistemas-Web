from django.shortcuts import render
from .models import Filme

def home(request):
    filmes = Filme.objects.all()
    return render(request, 'filmes/pages/home.html', {'filmes': filmes})

def filmes(request, id):
    filme = Filme.objects.get(id=id)
    return render(request, 'filmes/pages/filme.html', {'filme': filme})