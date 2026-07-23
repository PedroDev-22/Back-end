preco = float(input('Digite o preço do seu produto:R$'))
din = preco - (preco * 0.10)
cart = preco - (preco * 0.05)
x2 = preco / 2
condicao = int(input('Qual a forma de pagamento? \n [ 1 ] à vista em dinheiro, \n [ 2 ] à vista no cartão, \n [ 3 ] parcelado em 2x no cartão, ou \n [ 4 ] parcelado em 3x ou mais no cartão? \n Qual é a sua opção? '))
if condicao == 1:
    print(f'Você terá 10% de desconto, agora seu produto custa R${din:.2f}')
elif condicao == 2:
    print(f'Você tera 5% de desconto! O preço do seu produto agora é R${cart:.2f}')
elif condicao == 3:
    print(f'Seu produto agora custa R${x2:.2f} de 2x no cartão, totalizando R${preco}')
elif condicao == 4:
    parcelas = int(input(' Quantas parcelas? '))
    tx3 = preco + (preco * 0.20)
    x3 = tx3 / parcelas
    print(f'Seu produto agora custa R${x3:.2f} de {parcelas}x no cartão, totalizando R${tx3:.2f}')
else:
    print('Inválido')
