from random import sample
a= str(input('Qual o nome do aluno?'))
b= str(input('Qual o nome do aluno?'))
c= str(input('Qual o nome do aluno?'))
d= str(input('Qual o nome do aluno?'))
lista= [a, b, c, d]
ordem= sample(lista, 4)
print('A ordem de sorteio foi', ordem)


