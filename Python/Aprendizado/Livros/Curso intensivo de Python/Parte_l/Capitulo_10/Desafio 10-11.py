import json

arq = 'numero_favorito.json'
NumFav = int(input('Qual o seu número favorito? '))


with open(arq, 'w') as num_fav:
    json.dump(NumFav, num_fav)

with open(arq) as num_fav:
    print(f'Seu número favorito é {num_fav.read()}')

# também tem json.load(*num_fav*) para carregar