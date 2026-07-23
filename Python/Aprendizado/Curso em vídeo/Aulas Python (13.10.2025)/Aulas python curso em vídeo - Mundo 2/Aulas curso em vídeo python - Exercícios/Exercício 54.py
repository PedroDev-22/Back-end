from datetime import date
menores = 0
maiores = 0
for c in range(0, 6):
    ano = int(input(f'Digite o ano de nascimento da {c + 1}° pessoa:'))
    idade = date.today().year - ano
    if idade >= 18:
      maiores += 1
    elif idade < 18:
      menores += 1
print(f'\033[31m{maiores}\033[m pessoas são maiores de idade e \033[32m{menores}\033[m são menores de idade')
    

