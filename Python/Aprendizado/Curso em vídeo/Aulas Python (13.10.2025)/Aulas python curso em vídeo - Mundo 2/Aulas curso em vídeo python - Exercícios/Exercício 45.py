from time import sleep
import random
itens = ['pedra', 'papel', 'tesoura']
num = random.choice(itens)
escolhido = str(input('Você escolhe pedra, papel ou tesoura?')).lower()
print('JO')
sleep(1)
print('KEN')
sleep(1)
print('PO!!')
print('-=' *20)
if escolhido == num:
    print('Empate')
elif escolhido == 'pedra' and num == 'tesoura':
    print(f'Você ganhou, eu escolhi \033[31m{num}\033[m')
elif escolhido == 'pedra' and num == 'papel':
    print(f'Você perdeu, eu escolhi \033[31m{num}\033[m')
elif escolhido == 'papel' and num == 'tesoura':
    print(f'Você perdeu, eu escolhi \033[31m{num}\033[m')
elif escolhido == 'papel' and num == 'pedra':
    print(f'Você ganhou, eu escolhi \033[31m{num}\033[m')
elif escolhido == 'tesoura' and num == 'pedra':
    print(f'Você perdeu, eu escolhi \033[31m{num}\033[m')
elif escolhido == 'tesoura' and num == 'papel':
    print(f'Você ganhou, eu escolhi \033[31m{num}\033[m')
else:
    print('Você escreveu errado!')

