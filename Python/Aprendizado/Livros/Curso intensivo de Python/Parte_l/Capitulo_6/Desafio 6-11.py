cidades = {'São Luis': { 
            'Idade': '413 anos',
            'População:': '1m+',
            'País': 'Brasil',
            },
           'São Paulo': {
            'Idade': '471 anos',
            'População:': '11m+',
            'País': 'Brasil',
           },
           'Rio de Janeiro': { 
            'Idade': '460 anos',
            'População': '6m+',
            'País': 'Brasil',
           }
}

for cidade, info in cidades.items():
    print(f'\n{cidade}:')
    for chave, valor in info.items():
        print(f'{chave}: {valor}')