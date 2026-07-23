'''cont = 1
while True:
    print(cont, '->  ', end='')
    cont += 1
    if cont > 10:
        break
print('Acabou')'''

# ==============

'''n = s = 0
while n != 999:
    n = int(input("Digite um número:"))
    if n != 999:
       s += n
print("Fim")'''
# ou
n = s = 0
while n != 999:
    n = int(input("Digite um número:"))
    if n == 999:
      break
    s += n
print("Fim")
