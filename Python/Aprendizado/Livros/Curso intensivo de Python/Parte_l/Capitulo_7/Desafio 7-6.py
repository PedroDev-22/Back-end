cont = 1
quant = int(input('Quantas pessoas irão pagar o ingresso? '))
ativo = True
while ativo:
    idade = input(f'\nQual a idade da {cont} pessoa? [digite "sair" para sair]: ')
    if idade.lower() != 'sair':

        if idade.isnumeric():
            idade = int(idade)
        else:
            print('Digite um número válido, ou digite "sair" para sair')
            continue
        if idade < 3:
            print('O ingresso será gratuito')
        elif idade <= 12:
            print('O ingresso custa 10 doláres')
        elif idade > 12:
            print('O ingresso custará 15 doláres')
        cont += 1
        if cont > quant:
            break
    