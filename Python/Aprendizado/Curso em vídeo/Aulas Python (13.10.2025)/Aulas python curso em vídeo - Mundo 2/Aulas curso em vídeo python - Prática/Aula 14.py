'''for c in range(1, 10)
    print(c)
print('Fim')'''
# =>  =>  =>
'''c = 1
while c < 10:
    print(c)
    c += 1
print('Fim')'''

'''for c in range(1, 5)
    n = int(input('Digite um valor'))
print('Fim')'''
# =>  =>  =>
'''n = 1
while n != 0:
    n = int(input('Digite um valor'))
print('Fim')'''   # continua [infinito] até digitar 0

'''r = 's'
while r == 's':
    n = int(input('Digite um valor:'))
    r = str(input('Quer continuar? [ S \ N ]')).lower()
print('Fim')'''   # continua [infinito] até digitar não

n = 1
par = impar = 0
while n != 0:
    n = int(input('Digite um valor:'))
    if n != 0:
        if n % 2 == 0:
            par += 1
        elif n % 2 == 1:
            impar += 1
print(f'Você digitou {par} número(s) pares e {impar} números impares')
    

