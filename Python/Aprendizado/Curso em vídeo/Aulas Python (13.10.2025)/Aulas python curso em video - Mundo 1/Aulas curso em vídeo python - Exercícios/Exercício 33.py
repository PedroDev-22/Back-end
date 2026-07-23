num1 = int(input('Digite um número:'))
num2 = int(input('Digite um número:'))
num3 = int(input('Digite um número:'))
maior = num1
if num2 > num1 and num2 > num3:
    maior = num2
elif num3 > num1 and num3 > num2:
    maior = num3
menor = num1
if num2 < num1 and num2 < num3:
    menor = num2
elif num3 < num1 and num3 < num2:
    menor = num3
print(f'O maior número é {maior} e o menor número é {menor}')



