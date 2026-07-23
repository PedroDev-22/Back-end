arq_gato = 'gatos.txt'
arq_cachorro = 'cachorros.txt'

try:
    with open(arq_gato) as gatos:
        ler_gatos = gatos.read()

    with open(arq_cachorro) as cachorros:
        ler_cachorros = cachorros.read()

except:
    pass
else:
    print('-- Gatos --')
    print(ler_gatos)
    print('\n')

    print('-- Cachorros --')
    print(ler_cachorros)