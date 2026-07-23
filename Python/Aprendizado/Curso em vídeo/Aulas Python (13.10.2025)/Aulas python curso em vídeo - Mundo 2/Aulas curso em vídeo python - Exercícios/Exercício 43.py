peso = float(input('Digite seu peso: (Kg) '))
altura = float(input('Digite sua altura: (m) '))
imc = peso / (altura * altura)
if imc < 18.5:
    print(f'Se seu IMC é \033[31m{imc:.2f}\033[m, você está abaixo do peso')
elif 18.5 <= imc < 25:
    print(f'Se seu IMC é \033[31m{imc:.2f}\033[m, você está com um peso ideal')
elif 25 <= imc < 30:
    print(f'Se seu IMC é \033[31m{imc:.2f}\033[m, você está com sobrepeso')
elif 30 <= imc < 40:
    print(f'Se seu IMC é \033[31m{imc:.2f}\033[m, você está com obesidade')
elif imc >= 40:
    print(f'Se seu IMC é \033[31m{imc:.2f}\033[m, você está com obesidade mórbida')

