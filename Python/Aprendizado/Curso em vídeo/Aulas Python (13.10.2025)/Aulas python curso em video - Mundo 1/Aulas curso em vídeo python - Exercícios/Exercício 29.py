vel = float(input('Qual a velocidade do carro'))
mul = (vel - 80) * 7
if vel >= 81:
    print('Você está acima do limite de velocidade')
    print(f'Você recebeu uma multa de R$ {mul:.2f}')
elif vel < 80:
    print('Você pode seguir')
if vel == 80:
    print('Você está acima do limite de velocidade')
    print(f'Você recebeu uma multa de R$ 7,00')

