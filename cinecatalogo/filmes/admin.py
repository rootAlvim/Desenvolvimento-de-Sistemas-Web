from django.contrib import admin
from . models import Categoria, Filme
# Register your models here.
class CategoriaAdmin(admin.ModelAdmin):
    ...
admin.site.register(Categoria, CategoriaAdmin)

@admin.register(Filme)
class FilmeAdmin(admin.ModelAdmin):
    ...
