s = str(input('Digite seu sexo: [ M/F ]')).lower()
while s not in 'mf':
    s = str(input('Inválido, digite seu sexo novamente [ M/F ]:')).lower()
print(f'Sexo {s} confirmado')

 