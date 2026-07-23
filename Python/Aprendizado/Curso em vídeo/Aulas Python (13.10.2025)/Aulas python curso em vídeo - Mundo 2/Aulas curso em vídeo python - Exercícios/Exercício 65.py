quer = 's'
total = 0
quant = 0
maior = menor = 1
while quer != 'n':
    num = int(input('Digite um número inteiro:'))
    quer = str(input('Quer continuar? [ S / N ]')).lower()
    total += num
    quant += 1
    if quant == 1:
        maior = num
        menor = num
    elif maior < num:
        maior = num
    elif menor > num:
        menor = num
    if quer == 's' or  quer == 'n':
        continue
    else:
        print('Digite "s" , se você quer continuar, ou "n" , se não. Vou considerar que sim')
media = total / quant     
print(f'A média dos números que você digitou é {media:.0f}')
print(f'O maior número que você digitou é {maior} e o menor é {menor}')


