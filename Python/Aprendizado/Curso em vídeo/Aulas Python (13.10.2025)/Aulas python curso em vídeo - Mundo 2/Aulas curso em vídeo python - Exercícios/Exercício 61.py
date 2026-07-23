termo1 = int(input('Qual é o primeiro termo?'))
razao = int(input('Qual é a razão?'))
sinal = 1
while sinal != 11:                                              
    termo = termo1 + (sinal - 1) * razao
    sinal += 1
    print(termo, end=' -> ')
print('Fim')




