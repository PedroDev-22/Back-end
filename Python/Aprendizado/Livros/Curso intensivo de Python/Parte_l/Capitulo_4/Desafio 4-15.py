# primeiro

cubos = [cubo**3 for cubo in range(1,11)]
print(cubos)

print(f'Os três primeiros itens da lista são: {cubos[:3]}')
print(f'Os três itens do meio da lista são: {cubos[3:6]}')
print(f'Os três últimos itens da lista são: {cubos[-3:]}')




# segundo

minhas_pizzas = ['Calabresa', 'Queijo', 'Carne']

friend_pizza = minhas_pizzas[:]
minhas_pizzas.append('Mussarela')
friend_pizza.append('Peperonni')

print(f'Minhas pizzas favoritas são:')
for pizza in minhas_pizzas:
    print(pizza)

print(f'\nAs pizzas favoritas do meu amigo são:')
for pizza in friend_pizza:
    print(pizza)







# terceiro

pratos = ('Macarrão', 'Mussarela', 'Carne Bovina', 'Salada', 'Arroz')

print('Pratos oferecidos:')
for prato in pratos:
    print(prato)
# pratos[1] = 'Feijão'

pratos = ('Farofa', 'Feijão', 'Carne Bovina', 'Salada', 'Arroz')

print('\nNovos pratos oferecidos:')
for prato in pratos:
    print(prato)

