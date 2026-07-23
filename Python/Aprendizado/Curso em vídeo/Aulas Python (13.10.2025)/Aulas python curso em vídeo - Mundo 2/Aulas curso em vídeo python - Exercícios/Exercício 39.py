from datetime import date
ano = int(input('Digite o ano de seu nascimento:'))
sexo = str(input('Digite o seu sexo (M/F):')).upper()
atual = date.today().year
idade = atual - ano
falta = 18 - idade
passou = idade - 18
alistamento = atual - passou
if idade < 18 and sexo == 'M':
    print(f'Você ainda vai se alistar no exercito, \n Falta {falta} anos para isso acontecer, já que você tem {idade} anos \n Seu alistamento vai acontecer em {alistamento}')
elif idade == 18 and sexo == 'M':
    print(f'Já se alistou no exercito? \n Chegou a hora, você já tem {idade} anos!')
elif idade > 18 and sexo == 'M':
    print(f'Já se alistou no exercito? \n Se não, já passou da hora faz {passou} anos, já que você tem {idade} anos! \n Seu alistamento deveria ter acontecido em {alistamento}')
elif sexo == 'F':
    print('Você não precisa se alistar, já que você é mulher!')