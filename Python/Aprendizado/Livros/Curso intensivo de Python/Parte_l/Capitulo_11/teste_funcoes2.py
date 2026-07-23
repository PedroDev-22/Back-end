def loc(cidade, pais, populacao=''):
    if populacao:
        cidade_pais = f'{cidade.title()}, {pais.title()} - população de {populacao} pessoas'
    else:
        cidade_pais = f'{cidade.title()}, {pais.title()}'
    return cidade_pais

