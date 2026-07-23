import random
from time import sleep
num = random.randint(0,10)
chute = ''
palpites = 0
print('Você deverá escolher um número entre 0 e 10 e ver se esse número que você escolheu é o mesmo que o número sorteado')
while chute != num:
    chute = int(input('Escolha um número entre 0 e 10:'))
    print('PROCESSANDO...')
    sleep(1)
    if chute != num:
      print('Você errou, tente novamente')
    print('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
    palpites += 1
if palpites == 1:
   print('Nossa, você acertou de primeira!')
else:
   print(f'Você acertou! Com o total de {palpites} palpites até acertar')
