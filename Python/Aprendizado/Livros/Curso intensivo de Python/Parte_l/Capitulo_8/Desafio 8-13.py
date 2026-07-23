def construir_perfil(PrimeiroNome, Sobrenome, **caracteristicas):
    perfil = {}
    perfil['Primeiro nome'] = PrimeiroNome
    perfil['Segundo nome'] = Sobrenome
    
    for chave, valor in caracteristicas.items():
        perfil[chave] = valor

    for chave, valor in perfil.items():
        print(f'{chave}: {valor}')

    
construir_perfil('Pedro', 'Arthur', idade='14', tamanho='1.59m')