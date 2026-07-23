n1 = int(input('Digite um número inteiro:'))
n2 = int(input('Digite outro número inteiro:'))
if n1 > n2:
    print(f'\033[31m{n1}\033[m é maior que \033[32m{n2}')
    input('Pressione <enter> para continuar')
    print('==FIM==')
elif n2 > n1:
    print(f'\033[32m{n2}\033[m é maior que \033[31m{n1}')
    input('Pressione <enter> para continuar')
    print('==FIM==')
elif n1 == n2:
    print(f'\033[31m{n1}\033[m e \033[32m{n2}\033[m são valores iguais')
    input('Pressione <enter> para continuar')
    print('==FIM==')
else:
    print('Inválido')


