num1 = input('Digite um número: ')
num2 = input('Digite outro número: ')
try:
    if num1.isnumeric and num2.isnumeric:
        num1 = int(num1)
        num2 = int(num2) 
        soma = num1 + num2
        print(soma)
except:
    print('Os "números" fornecidos não são números')


