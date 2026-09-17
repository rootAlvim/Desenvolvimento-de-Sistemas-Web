from django.shortcuts import render
def home(request):
    filmes = [
        {
            'id': 1,
            'titulo': 'Mad Max: Estrada da Fúria',
            'categoria': 'Ação',
            'nota': 8.1,
            'imagem': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWW192rWnZEqlV6mSQugd2UNlebMqwgi9mgFHea3ttN9U30QONDbtTvAjX&s=10',
        },
        {
            'id': 2,
            'titulo': 'Duna',
            'categoria': 'Ficção',
            'nota': 8.4,
            'imagem': 'https://upload.wikimedia.org/wikipedia/pt/a/a3/Dune_2021.jpeg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
        },
        {
            'id': 3,
            'titulo': 'O Poderoso Chefão',
            'categoria': 'Drama',
            'nota': 9.2,
            'imagem': 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg',
        },
        {
            'id': 4,
            'titulo': 'Matrix',
            'categoria': 'Ação',
            'nota': 8.7,
            'imagem': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-peJ7CjkXH2wlElLUyyx0iFmTRGIjEPqthMuTd697Sun_CzCLUh-H9vc&s=10',
        },
    ]

    return render(request, 'filmes/pages/home.html', {'filmes': filmes})


def filmes(request, id):
    return render(request, 'filmes/pages/filme.html', {'id': id})

