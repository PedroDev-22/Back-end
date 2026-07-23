arqv = 'usuario.txt'

nome = input('Digite seu nome: ')

with open(arqv, 'a') as arquivo:
    arquivo.write(nome + '\n')