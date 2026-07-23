carro = 'Chevrolet'

if carro.lower() == 'chevrolet':
    print('Carro == Chevrolet')
if carro.lower() != 'chevrolet':
    print('Carro != Chevrolet')


num1 = 6
num2 = 9

if (num1 + num2) > 14 and (num1 - num2) < 14:
    print(f'{num1} e {num2} somados e subtraidos, são maiores e menores que 14, respectivamente')
if (num1 + num2) < 14 and (num1 - num2) > 14:
    print(f'{num1} e {num2} somados e subtraidos, são menores e maiores que 14, respectivamente')


lista = ['camarão', 'carne', 'panqueca', 'caranguejo']
if 'caranguejo' in lista:
    print('No cárdapio tem caranguejo')
if 'arroz' not in lista:
    print('Não tem arroz no cárdapio')
