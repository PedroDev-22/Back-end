arq = 'projeto_gutenberg.txt'

with open(arq) as gutenberg:
    linha = gutenberg.read()
    print(linha.count('The'))
    print(linha.lower().count('the'))