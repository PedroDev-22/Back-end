import json

while True:
    confirma = input('Você é o usuário "Pedro"? "s", para sim ou "n", para não": ').lower().strip()[0]
    if confirma in 'sn':
        break
    print('Inválido, digite "s" para sim ou "n" para não')

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



if confirma == 's':
    num_favorito()