from time import sleep
print('============ LOJA BOM PREÇO ============')
sleep(1)
continuar = 's'
nome = 'n'
preco = contador = total = mais_de_1000 = menor_preco =  0
mais_barato = ''
while continuar == 's':
    nome = str(input('Digite o nome do produto:' ))
    while True:
     try:
       preco = float(input('Digite o preço do produto: R$'))
       break
     except:
       print('O produto deve ter um preço válido')
       continue
    contador += 1
    total += preco
    if preco > 1000:
      mais_de_1000 += 1
    if contador == 1 or preco < menor_preco:
      menor_preco = preco
      mais_barato = nome
    while True:
      continuar = input('Quer continuar? [S/N] ')
      if continuar == 's' or continuar == 'n':
        break
      print('Digite [s], se você quer continuar ou [n], se você não quer').strip().lower()[0]
    print('-=' * 10)
print('========= Programa encerrado =========')
sleep(1)
print(f'O total gasto na compra foi R${total:.2f}')
print(f'{mais_de_1000} produto(s) custam mais de R$1000')
print(f'O produto mais barato é {mais_barato}, custando R${menor_preco:.2f}') 