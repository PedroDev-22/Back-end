arqv = 'aprendendo_python.txt'

with open(arqv) as arquivo:
    novo = arquivo.read()      # lê o arquivo todo
    print(novo.replace('python', 'c'))



