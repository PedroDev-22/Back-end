n = int(input('Digite um número:'))
bina= bin(n)[2:]
octal = oct(n)[2:]
hexa = hex(n)[2:]
base = str(input('Qual será a base de conversão? \n Digite "1" para binário \n digite "2" para octal \n digite "3" para hexadecimal. \n Sua opção:'))
if base == '1':
    print(f'O número \033[31m{n}\033[m em binário é igual a \033[32m{bina}\033[m')
elif base == '2':
    print(f'O número \033[31m{n}\033[m em octal é igual a \033[33m{octal}\033[m')
elif base == '3':
    print(f'O número \033[31m{n}\033[m em hexadecimal é igual a \033[34m{hexa}\033[m')
else:
    print('Opção invalida!')





