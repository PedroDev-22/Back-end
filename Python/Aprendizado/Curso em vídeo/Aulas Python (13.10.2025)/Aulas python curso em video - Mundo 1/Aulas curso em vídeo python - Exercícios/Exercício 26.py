import unidecode
frase= str(input('Digite uma frase')).lower()
f= unidecode.unidecode(frase)
a = f.count('a')
print(f'A letra "a" aparece {a} vezes nessa frase')
print('A letra "a" aparece pela primeira vez no digito', f.replace(' ', '').find('a'))
print('A letra "a" aparece pela última vez no digíto', f.replace(' ', '').rfind('a'))


