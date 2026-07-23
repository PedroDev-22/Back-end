pessoa1 = {'nome': 'Pedro', 
          'sobrenome': 'Arthur', 
          'idade': 14, 
          'cidade': 'São Luis'
          }

pessoa2 = {'nome': 'Ana', 
          'sobrenome': 'Lívia', 
          'idade': 19, 
          'cidade': 'São Paulo'
          }

pessoa3 = {'nome': 'João', 
          'sobrenome': 'Pedro', 
          'idade': 27, 
          'cidade': 'Espirito Santo'
          }

pessoas = [pessoa1, pessoa2, pessoa3]

for pessoa in pessoas:
    for chave, valor in pessoa.items():
        if chave == 'nome':
            print(f'\n{chave}: {valor}')
        else:
            print(f'{chave}: {valor}')