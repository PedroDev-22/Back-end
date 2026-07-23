c1 = float(input('Digite o comprimento da reta 1:'))
c2 = float(input('Digite o comprimento da reta 2:'))
c3 = float(input('Digite o comprimento da reta 3:'))
if c1 + c2 > c3 and c1 + c3 > c2 and c2 + c3 > c1:
    if c1 == c2 == c3:
        print('Com esses comprimentos é possivel formar um triângulo \033[31mEQUILÁTERO\033[m!')
    elif c1 == c2 or c2 == c3 or c3 == c1:
        print('Com esses comprimentos é possível formar um triângulo \033[32mISÓSCELES\033[m!')
    elif c1 != c2 != c3 != c1:
        print('Com esses comprimentos é possível formar um triângulo \033[33mESCALENO\033[m!')
else:
    print('Com esses comprimentos não é possível formar um triângulo!')
