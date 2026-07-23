print(' LANCHONETE '.center(30, '='))
print()
sanduiches = ['sanduiche natural', 'sanduiche de pastrami', 'sanduiche com pasta de amendoim', 'sanduiche de pastrami' ,'sanduiche com requeijão e ketchup', 'sanduiche de atum', 'sanduiche de pastrami']
sanduiches_finalizados = []
while 'sanduiche de pastrami' in sanduiches:
    sanduiches.remove('sanduiche de pastrami')
print('Nós estamos sem pastrami')
print('-' * 20)
while sanduiches:
    sanduiche = sanduiches.pop()
    print(f'Preparei seu {sanduiche}')
    sanduiches_finalizados.append(sanduiche)
print('-=' * 10)
print('== Sanduiches finalizados: ==')
for sanduiche in sanduiches_finalizados:
    print('-', sanduiche)
    