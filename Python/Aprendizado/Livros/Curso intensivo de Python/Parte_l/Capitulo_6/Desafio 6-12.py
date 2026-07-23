cidades = { 'São Luis': { 
            'Idade': '413 anos',
            'População': '1 milhão',
            'País': 'Brasil'
            },

            'Roma': {
            'Idade': '2778 anos',
            'População': '2 milhões',
            'País': 'Itália'
            },

            'Madrid': {
            'Idade': '1160 anos',
            'População': '3 milhões',
            'País': 'Espanha'
            },

           'São Paulo': {
            'Idade': '471 anos',
            'População': '11 milhões',
            'País': 'Brasil'
           },

           'Tokyo': {
            'Idade': '568 anos',
            'População': '14 milhões',
            'País': 'Japão'
           },

           'Rio de Janeiro': { 
            'Idade': '460 anos',
            'População': '6 milhões',
            'País': 'Brasil'
           }
}

for cidade, info in cidades.items():
    print(f'\n{cidade}:')
    for chave, valor in info.items():
        if chave == 'Idade':
            print(f'{cidade} tem {valor} de idade')
        elif chave == 'População':
            print(f'{cidade} tem mais de {valor} de habitantes')
        elif chave == 'País':
            print(f'O país onde {cidade} se localiza é o(a) {valor}')
