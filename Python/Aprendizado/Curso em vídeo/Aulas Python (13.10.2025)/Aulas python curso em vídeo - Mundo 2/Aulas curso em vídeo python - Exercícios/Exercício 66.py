num = soma = quant = 0
while True:
    num = int(input('Digite um número ("999" para parar): '))
    if num == 999:
        break
    quant += 1
    soma += num
print(f'Você digitou \033[31m{quant}\033[m números e a soma entre eles é \033[32m{soma}\033[m')
