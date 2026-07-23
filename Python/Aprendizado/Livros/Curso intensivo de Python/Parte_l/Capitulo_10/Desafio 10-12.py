import json

arq = 'numero_favorito.json'

def num_favorito():
    try:
        with open(arq) as file:
            n = json.load(file)
        print(f'Seu número favorito é {n}')
        return n
    
    except (FileNotFoundError, json.JSONDecodeError):
        n = int(input('Qual o seu número favorito? '))
        with open(arq, 'w') as file:
            json.dump(n, file)
        print(f'Seu número favorito é {n}')
        return n

num_favorito()