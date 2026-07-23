num = int(input('Digite um número:'))
fatorial = 1
while num > 0:
    fatorial *= num
    num -= 1
print(f'O fatorial desse número é {fatorial}')

# ou 

'''from math import factorial
n = int(input('Digite um número'))
f = factorial(n)
print(f' o fatorial de {n} é {f}')'''
