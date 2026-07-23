nums_favoritos = {'Pedro': 
                    {'1': 22,
                     '2': 11 
                     },
                  'Saulo': { 
                     '1': 7,
                     '2': 10,
                     '3': 8
                     },
                  'Sofia': {
                     '1': 8,
                     '2': 14,
                      },

                  'Lucas': {
                      '1': 11,
                      '2': 10
                  }
}

for nome, numeros in nums_favoritos.items():
    print(f'\n{nome}:')
    for numero in numeros.values():
        print(numero)

