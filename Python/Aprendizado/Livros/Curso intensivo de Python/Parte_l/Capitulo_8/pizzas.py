def fazer_pizza(tamanho, *receitas):
    """
    Apresenta uma pizza
    
    :param tamanho: tamanho da pizza
    :param receitas: receitas da pizza
    """
    print(f'\nFazendo uma pizza de {tamanho} pedaços com as seguintes receitas:')
    for receita in receitas:
        print('-' + receita)
        