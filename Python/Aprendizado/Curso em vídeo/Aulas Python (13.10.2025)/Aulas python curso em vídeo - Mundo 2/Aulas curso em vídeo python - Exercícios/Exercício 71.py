from time import sleep
print('========== CAIXA ELETRÔNICO ==========')
sleep(1)
valor = int(input('Qual será o valor a ser sacado?'))
ced_50 = ced_20 = ced_10 = ced_1 = 0
while valor > 0:
    while valor >= 50:
        valor -= 50
        ced_50 += 1
    while valor >= 20:
        valor -= 20
        ced_20 += 1
    while valor >= 10:
        valor -= 10
        ced_10 += 1
    while valor >= 1:
        valor -= 1
        ced_1 += 1
print(f'Total de {ced_50} de R$50')
print(f'Total de {ced_20} de R$20')
print(f'Total de {ced_10} de R$10')
print(f'Total de {ced_1} de R$1')


