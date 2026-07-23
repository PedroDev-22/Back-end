def itens_sanduiche(*itens):
    print('\nResumo do sanduiche pedido:')
    for item in itens:
        print(f'- {item}')


itens_sanduiche('queijo')
itens_sanduiche('ketchup', 'salsicha')
itens_sanduiche('Salada', 'queijo', 'manteiga')