dis = float(input('Qual a distância da sua viagem?'))
vc = 0.50 * dis
vl = 0.45 * dis
if dis <= 200:
    print(f'O preço da sua viagem é {vc:.2f}')
else:
    print(f'O preço da sua viagem é {vl:.2f}')
