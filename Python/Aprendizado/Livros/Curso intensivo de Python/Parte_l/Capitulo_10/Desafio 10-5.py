arq = 'motivo_programacao.txt'

with open(arq, 'a') as arquivo:
    porque = str(input('Por que você gosta de programação? '))
    arquivo.write(porque + '\n')

