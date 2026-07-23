Thor = {'Nome': 'Thor',
        'Tipo': 'Cachorro',
        'raça': 'Pudoh',
        'Dono': 'Pedro'
        }

Florzinha = {'Nome': 'Florzinha',
            'Tipo': 'Cachorro',
            'Raça': 'Pitbull',
            'Dono': 'Só braço'
            }

pilula = {'Nome': 'Pilula',
          'Tipo': 'Ramster',
          'Raça': 'Roborovski',
          'Dono': 'Maria'
          }

garfield = {'Nome': 'Garfield',
            'Tipo': 'Gato',
            'Raça': 'Persa',
            'Dono': 'Marcos'
            }

pets = [Thor, Florzinha, pilula, garfield]

for pet in pets:
    for chave, valor in pet.items():
        if chave == 'Nome':
            print(f'\n{chave}: {valor}')
        else:
            print(f'{chave}: {valor}')
