from time import sleep
num1 = int(input('Digite um valor inteiro:'))
num2 = int(input('Digite outro valor inteiro:'))
somar = num1 + num2
multi = num1 * num2
caso = 1
while caso != 5:
    caso = int(input('O que você deseja fazer: \n [ 1 ] para somar os dois valores \n [ 2 ] para multiplicar os dois valores \n [ 3 ] para ver qual o maior valor \n [ 4 ] para digitar novos números \n [ 5 ] para terminar o programa \n'))
    if caso == 1:
        print(f'A soma entre esses dois valores é {somar}')
    if caso == 2:
        print(f'A multiplicação entre esses dois valores é {multi}')
    if caso == 3:
        if num1 > num2:
            print(f'{num1} é maior que {num2}')
        elif num2 > num1:
            print(f'{num2} é maior que {num1}')
        elif num1 == num2:
            print('Esses valores são iguais!')
    if caso == 4:
        num1 = int(input('Digite o novo número:'))
        num2 = int(input('Digite o outro novo número:'))
        somar = num1 + num2
        multi = num1 * num2
    if caso == 5:
        print('Fim')
    else:
        print('Digite um número válido')
    sleep(2)
    print('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')


