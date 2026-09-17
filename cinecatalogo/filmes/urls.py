from . import views
from django.urls import path

urlpatterns = [
    path('', views.home, name='home'),
    path('filmes/<int:id>/', views.filmes, name='filmes'),
]
