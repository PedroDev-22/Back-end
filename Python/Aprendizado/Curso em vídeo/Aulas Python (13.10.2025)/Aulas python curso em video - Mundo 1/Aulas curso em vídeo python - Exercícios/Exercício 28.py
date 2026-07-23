import random
from time import sleep
num = random.randint(0,5)
print('Você deverá escolher um número entre 0 e 5 e ver se esse número que você escolheu é o mesmo que o número sorteado')
chute = int(input('Escolha um número entre 0 e 5:'))
print('PROCESSANDO...')
sleep(1)
if num == chute:
    print('Parabéns você acertou o número')
else:
    print(f'Você errou o número, eu pensei no número {num}')


