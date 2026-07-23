from time import sleep
num = multip = 0
while num >= 0:
    num = int(input('Digite um número: '))
    if num >= 0:
      print(f'A tabuada de {num} é:')
      sleep(1)
      print('-=' *10)
      print(f'{num} x 1 = {num * 1}')
      print(f'{num} x 2 = {num * 2}')
      print(f'{num} x 3 = {num * 3}')
      print(f'{num} x 4 = {num * 4}')
      print(f'{num} x 5 = {num * 5}')
      print(f'{num} x 6 = {num * 6}')
      print(f'{num} x 7 = {num * 7}')
      print(f'{num} x 8 = {num * 8}')
      print(f'{num} x 9 = {num * 9}')
      print(f'{num} x 10 = {num * 10}')
      print('-=' * 10)
      sleep(3)
print(f'{num} não é um número natural, programa encerrado')

# ou

'''while True:
    n = int(input('De qual número queres ver a tabuada [negativo para finalizar]: '))
    if n < 0:
        break
    c = 1
    print('-'*11)
    while c < 11:
        print(f'{n} * {c} = {n * c}')
        c += 1
    print('-'*11)
print('Programa Encerrado!')'''

