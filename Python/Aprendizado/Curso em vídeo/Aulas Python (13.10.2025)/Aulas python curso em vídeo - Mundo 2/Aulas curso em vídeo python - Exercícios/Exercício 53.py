palin = str(input('Escreva um palíndromo:')).strip().lower().replace(" ", "")
verif = palin [::-1]
print(f'O inverso de {palin} é {verif}')
if palin == verif:
    print('Isso é um palíndromo!')
else:
    print('Isso não é um palíndromo')
    