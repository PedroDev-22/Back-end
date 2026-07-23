print('=========== JOGO DO IMPAR OU PAR ============')
from time import sleep 
from random import choice
from random import randint
sleep(1)
pi = jog_pi = jog_num = 0
lista = ['par', 'impar']
continuar = True
sequencia = 0
while continuar == True:
    comp_pi = choice(lista)
    comp_num = randint(1, 10)
    if comp_pi == 'impar':
        jog_pi = 'par'
        print('Você vai ficar com \033[31mpar\033[m pois o computador escolheu impar') # se o jogador escolhesse par ou impar, seria possivel colocar [.strip().lower()[0]] no final do input para considerar apenas a primeira letra, que no caso seria [i] ou [p]
    elif comp_pi == 'par':
        jog_pi = 'impar'
        print('Você vai ficar com \033[31mimpar\033[m pois o jogador escolheu par')                                                                   
    jog_num = int(input('Escolha um número de 1 a 10: '))
    soma = jog_num + comp_num
    if soma % 2 == 0 and jog_pi == 'par':
        print(f'Você ganhou, o computador escolheu o número {comp_num}')
        sequencia += 1
    elif soma % 2 != 0 and jog_pi == 'impar':      
        print(f'Você ganhou, o computador escolheu o número {comp_num}')     
        sequencia += 1
    elif soma % 2 == 0 and jog_pi == 'impar':
        print(f'Você perdeu e o computador ganhou, ele escolheu o número {comp_num}')  
        continuar = False                    
    elif soma % 2 != 0 and jog_pi == 'par':  
        print(f'Você perdeu e o computador ganhou, ele escolheu o número {comp_num}')  
        continuar = False
    else:
        print('Erro, tente novamente')
    sleep(2)
    print('-=' * 20)
if sequencia == 0:
    print('Você não conseguiu nenhuma vitória em sequência')
elif sequencia == 1:
    print('Você conseguiu 1 vitória em sequência')
elif sequencia > 1:
   print(f'Você conseguiu {sequencia} vitórias em sequência')
sleep(1)
print('Programa encerrado')


    


