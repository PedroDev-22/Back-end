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
