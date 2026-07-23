sanduiches = ['sanduiche natural', 'sanduiche com pasta de amendoim', 'sanduiche com requeijão e ketchup', 'sanduiche de atum']
sanduiches_finalizados = []
while sanduiches:
    sanduiche = sanduiches.pop()
    print(f'Preparei seu {sanduiche}')
    sanduiches_finalizados.append(sanduiche)
print('-=' * 10)
print('== Sanduiches finalizados: ==')
for sanduiche in sanduiches_finalizados:
    print('-', sanduiche)
    