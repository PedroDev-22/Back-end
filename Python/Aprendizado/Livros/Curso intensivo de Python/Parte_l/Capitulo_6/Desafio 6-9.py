lugares_favoritos = {
                    'Pedro': {
                        '1': 'Islândia',
                    },
                    'Maria': {
                        '1': 'Estados Unidos',
                        '2': 'Japão',
                        '3': 'Turquia'
                    },
                    'João': {
                        '1': 'Suécia',
                        '2': 'Canadá',
                    }
}

for pessoa, lugares in lugares_favoritos.items():
    print(f'\n{pessoa}:')
    for lugar in lugares.values():
        print(lugar)

    
