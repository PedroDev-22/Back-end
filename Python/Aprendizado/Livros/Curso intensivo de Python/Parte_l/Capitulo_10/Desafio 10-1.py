arqv = 'aprendendo_python.txt'

with open(arqv) as arquivo:
    linhas = arquivo.readlines()        #Lê cada linha do arquivo

cont = 0
while cont < 3:
    for linha in linhas:
        print(linha.strip())
    cont += 1
    print('\n')



