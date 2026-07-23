termo1 = int(input('Qual é o primeiro termo?'))
razao = int(input('Qual é a razão?'))
for c in range(1, 10+1,):
    termo = termo1 + (c - 1) * razao
    print(termo, end=' -> ')
print('Fim')