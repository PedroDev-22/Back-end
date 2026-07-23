cont = 1
quant = int(input('Quantas pessoas irão pagar o ingresso? '))
while cont <= quant:
    idade = int(input(f'\nQual a idade da {cont} pessoa? '))
    if idade < 3:
        print('O ingresso será gratuito')
    elif idade <= 12:
        print('O ingresso custa 10 doláres')
    elif idade > 12:
        print('O ingresso custará 15 doláres')
    cont += 1
    