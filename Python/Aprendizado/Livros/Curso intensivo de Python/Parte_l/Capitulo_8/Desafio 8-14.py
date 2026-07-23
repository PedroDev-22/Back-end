def informações_carro(fabricante, modelo, **outros):
    infos = {}
    infos['Fabricante'] = fabricante
    infos['Modelo'] = modelo
    for chave, valor in outros.items():
        infos[chave] = valor

    for chave, valor in infos.items():
        print(f'{chave}: {valor}')

informações_carro('subaru', 'outback', cor='azul', tow_package=True)
