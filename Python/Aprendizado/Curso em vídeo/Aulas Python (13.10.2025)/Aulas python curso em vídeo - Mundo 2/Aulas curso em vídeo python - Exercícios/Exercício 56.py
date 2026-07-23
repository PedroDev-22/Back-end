junto = 0
mm20 = 0
velho = 0
nhmv = ''
for c in range(1, 5):
    print('----',c,' pessoa----')
    nome = str(input('Seu nome:')).title()
    idade = int(input('Sua idade:'))
    sexo = str(input('Seu sexo (M) ou (F):')).lower()
    junto += idade
    if sexo == 'm':
      if velho == 0:
        velho = idade
        nhmv = nome
      if idade > velho:
        velho = idade
        nhmv = nome
    if sexo == 'f' and idade < 20:
      mm20 += 1
media = junto / 4
print(f'A média de idade do grupo é {media} anos')
print(f'O nome do homem mais velho é {nhmv}')
print(f'{mm20} mulher(es) têm menos de 20 anos')