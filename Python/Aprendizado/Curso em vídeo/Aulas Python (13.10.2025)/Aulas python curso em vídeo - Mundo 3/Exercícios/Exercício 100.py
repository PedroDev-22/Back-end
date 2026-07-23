from random import randint
from time import sleep
comeca_ai_mano = input('')
numero = []
def sorteia():
    for _ in range(5):
        numero.append(randint(0, 10))
    print(f'Numeros sorteados: {numero}')
    sleep(1.5)


def somaPar(lista):
    soma = 0
    for c in lista:
        if c % 2 == 0:
            soma += c
    print(f'A soma dos valores pares é {soma}')

sorteia()
somaPar(numero)

