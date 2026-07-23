s = 0
for c in range(1, 500+1):
    i = c % 2
    if i == 1 and c % 3 == 0:
        c += s
        s =+ c
print(f'O somatório dos números impares múltiplos de três entre 1 e 500 é: {s}')



