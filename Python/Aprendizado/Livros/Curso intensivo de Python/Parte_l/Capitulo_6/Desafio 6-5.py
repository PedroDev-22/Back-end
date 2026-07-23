rios = {'Nilo': 'Egito',
        'Amazonas': 'Amazonas',
        'Congo': 'República do Congo'
        }


for rio, pais in rios.items():
    print(f'\nO Rio {rio} corre pelo(a) {pais}')

print(f'\nRios incluidos:')
for rio in set(rios.keys()):
    print(rio)

print(f'\nPaises incluidos:')
for pais in set(rios.values()):
    print(pais)
