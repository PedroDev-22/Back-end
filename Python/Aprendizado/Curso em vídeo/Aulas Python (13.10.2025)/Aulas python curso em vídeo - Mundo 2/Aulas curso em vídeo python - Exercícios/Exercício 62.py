from time import sleep

termo1 = int(input('Qual é o primeiro termo? '))
razao = int(input('Qual é a razão? '))

sinal = 1
total = 10

# ----- Primeira PA -----
while sinal <= total:
    termo = termo1 + (sinal - 1) * razao
    print(termo, end=' -> ')
    sinal += 1
print('Fim')

sleep(2)
print('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ')

# ----- Repetição -----
quant = int(input('Você quer mostrar mais quantos termos? '))

while quant != 0:
    total += quant  # aumenta o total que deve ser mostrado
    while sinal <= total:   # continua de onde parou
        termo = termo1 + (sinal - 1) * razao
        print(termo, end=' -> ')
        sinal += 1
    print('PAUSA')
    print('-=' * 10)
    quant = int(input('Você quer mostrar mais quantos termos? '))

print('Fim')






    



