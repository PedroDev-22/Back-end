n = int(input('Digite um número inteiro:'))
primo = 0
for c in range(2, n):
    if n % c == 0:
     primo = 1
if primo == 0:
 print('O número é primo')
else:
 print('O número não é primo')