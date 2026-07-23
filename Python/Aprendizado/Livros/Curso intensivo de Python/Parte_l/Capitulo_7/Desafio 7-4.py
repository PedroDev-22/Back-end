pedido = ''
while pedido != 'sair':
    pedido = str(input('Adicione ingredientes ao seu pedido [digite "quit" para sair]: ')).lower()
    if pedido != 'sair':
        print('Pedido adicionado')