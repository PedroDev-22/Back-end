val = float(input('Qual o valor da casa? R$'))
sal = float(input('Qual o seu salário? R$'))
anos = int(input('Você vai parcelar a casa em quantos anos?'))
prestacao = val / (anos * 12)
minimo = sal * 30 / 100
if prestacao <= minimo:
    print(f'O valor da sua prestação é de \033[31mR${prestacao:.2f}\033[m mensais')
else:
    print('Você não pode pagar essa prestação, pois ela excede em 30% o seu salário')






