km= float(input('Qual a quantidade de km percorridos pelo carro?'))
dia= float(input('Qual a quantidade de dias pela qual o carro foi alugado?'))
preço= (60*dia) + (0.15*km)
print(f'O preço que você irá pagar será R${preço:.2f}')

