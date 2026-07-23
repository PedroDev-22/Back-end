arq = 'livro_usuário.txt'

with open(arq, 'a') as arquivo:
    cont = 's'
    while cont == 's':
        nome = str(input('Digite seu nome: '))
        arquivo.write(nome + '\n')
        print('Nome adicionado com sucesso')
        while True:
            cont = input('Quer continuar?').lower().strip()[0]
            if cont in 'sn':
                print('\n')
                break
            print('Digite "s" para continuar ou "n", para não continuar')
    
    
