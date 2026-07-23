nome = str(input('Digite seu nome:'))
if nome == 'Pedro' or nome == 'João' or nome == 'Yuri' or nome == 'Iuri':
    print('Que nome bonito!')
elif nome == 'Guanabara':
    print('Que nome feio!')
elif nome in 'Pedro Arthur do Nascimento Ferreira':
    print('Que nome bonito!')
else:
    print(f'Olá, \033[31m{nome}!')


