num = 0
somatorio = 0
while num != 999:
    num = int(input('Digite um número inteiro:'))
    if num != 999:
      somatorio += num
print(f'O somatório dos números digitados é {somatorio}')
