nomes = ['pedro', 'joana', 'admin', 'jonas', 'felipe']
for nome in nomes:
    if nome != 'admin':
        print(f'Olá {nome}, bem vindo')
    else:
        print(f'Olá admin, deseja um relatório de status?')
