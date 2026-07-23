c1 = float(input('Digite o comprimento da reta 1:'))
c2 = float(input('Digite o comprimento da reta 2:'))
c3 = float(input('Digite o comprimento da reta 3:'))
if c1 + c2 > c3 and c1 + c3 > c2 and c2 + c3 > c1:
    print('Com esses comprimentos é possivel formar um triângulo!')
else:
    print('Com esses comprimentos não é possível formar um triângulo!')

