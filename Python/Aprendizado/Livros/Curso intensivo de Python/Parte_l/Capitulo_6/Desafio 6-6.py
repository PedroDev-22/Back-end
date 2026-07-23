pessoas = {'Pedro': 'c#',
           'João': 'python',
           'Robison': 'ruby',
           'Carla': 'Java',
           'Deyvin': 'ruby'
           }

participaram = ['João', 'Deyvin', 'Pedro']

for pessoa in pessoas.keys():
    if pessoa in participaram:
        print(f'Obrigado por responder a enquete {pessoa}')
    elif pessoa not in participaram:
        print(f'Responda a enquete, por favor, {pessoa}')
    else:
        ('Erro')
