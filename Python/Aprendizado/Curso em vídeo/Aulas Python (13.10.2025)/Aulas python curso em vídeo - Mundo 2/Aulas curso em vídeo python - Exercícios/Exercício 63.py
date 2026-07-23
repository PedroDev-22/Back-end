quant = int(input('Quantos números irá ter nessa sequência de Fibonacci:'))
sinal = 0
a, b = 0, 1
while sinal < quant:
    print(a, end= ' -> ')
    a, b = b, a + b
    sinal += 1
print('Fim')


