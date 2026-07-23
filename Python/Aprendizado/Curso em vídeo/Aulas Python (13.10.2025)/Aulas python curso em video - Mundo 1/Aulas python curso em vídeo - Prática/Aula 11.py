#print('\033[1;30;107mOlá, mundo\033[m')
#print('\033[7;33;44mOlá, Mundo\033[m')
a = 4
b = 2
print(f'Os valores são \033[31m{a}\033[m e \033[32m{b}\033[m')
nome = str(input('digite seu nome:'))
cores = {'limpa':'\033[m',
         'azul':'\033[34m',
         'amarelo':'\033[33m',
         'pretoebranco':'\033[7;97;40m'}
print(f'Olá, muito prazer em te conhecer, {cores['pretoebranco']}{nome}\033[m')


