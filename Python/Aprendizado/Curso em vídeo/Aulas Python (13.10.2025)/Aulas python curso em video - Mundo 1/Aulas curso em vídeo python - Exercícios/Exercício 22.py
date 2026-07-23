nome= str(input('Digite seu nome'))
print('Seu nome com todas as letras maiúsculas é', nome.upper())
print('O seu nome com todas as letras minúsculas é', nome.lower())
print('O seu nome tem', len(nome.replace(' ','')),'caracteres')
print('No seu primeiro nome tem', len(nome.split()[0]),'caracteres')

