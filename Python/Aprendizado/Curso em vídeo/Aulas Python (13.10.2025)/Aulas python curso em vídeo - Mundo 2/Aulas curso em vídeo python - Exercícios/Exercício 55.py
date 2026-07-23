for c in range(1, 6):
    peso = float(input(f'Digite o peso da {c}° pessoa:'))
    if c == 1:
        maior = peso
        menor = peso
    if peso > maior:
        maior = peso
    if peso < menor:
        menor = peso
print(f'O menor peso é {menor}kg e o maior peso é {maior}kg')