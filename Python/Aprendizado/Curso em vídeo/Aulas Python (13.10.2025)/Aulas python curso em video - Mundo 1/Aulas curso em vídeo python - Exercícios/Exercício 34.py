salario = float(input('Qual o seu salário? R$'))
sals = salario * 0.10
sali = salario * 0.15
nsals = salario + sals
nsali = salario + sali
if salario > 1250:
    print(f'O seu aumento será de R${sals:.2f}')
    print(f'Você passará a ganhar R${nsals:.2f}')
elif salario <= 1250:
    print(f'O aumento do seu salário será de R${sali:.2f}')
    print(f'Você passará a ganhar R${nsali:.2f}')

