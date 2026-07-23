from collections import OrderedDict

palavras = OrderedDict()

palavras['print'] = 'imprimi algo'
palavras['input'] = 'pede algo'
palavras['variável'] = 'um valor que pode mudar'
palavras['dicionário'] = 'guarda valores'
palavras['f-string'] = 'um tipo de impressão'


for metodo, função in palavras.items():
    print(f'\n{metodo.title()}: {função.capitalize()}')


