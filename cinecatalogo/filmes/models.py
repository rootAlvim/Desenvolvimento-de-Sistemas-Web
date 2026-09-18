from django.db import models
from django .contrib.auth.models import User
# Create your models here.
class Categoria(models.Model):
    nome = models.CharField(max_length=50)

    def __str__(self):
        return self.nome


class Filme(models.Model):
    title = models.CharField(max_length=50)
    sinopse = models.TextField()
    slug = models.SlugField()
    ano_lancamento = models.IntegerField()
    diretor = models.CharField(max_length=100)
    duracao = models.IntegerField()
    imagem_capa = models.ImageField(upload_to='filmes/capas/%Y/%m/%d/')
    criado_em = models.DateTimeField(auto_now_add=True) #gera a dat no momento da criação
    atualizado_em = models.DateTimeField(auto_now=True)
    publicado = models.BooleanField(default=False)
    categoria = models.ForeignKey(Categoria,on_delete=models.SET_NULL, null=True)
    autor = models.ForeignKey(User,on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.title