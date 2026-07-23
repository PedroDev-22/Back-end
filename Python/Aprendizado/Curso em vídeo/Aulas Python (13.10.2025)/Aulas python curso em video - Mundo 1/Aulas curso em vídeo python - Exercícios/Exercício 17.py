
#opo= float(input('Digite o valor doa cateto oposto'))
#adj= float(input('Digite o valor do cateto adjacente'))
#hipo= (opo ** 2 + adj ** 2) ** (1/2)
#print(f'A hipotenusa é {hipo}')

import math
opo= float(input('Digite o valor doa cateto oposto'))
adj= float(input('Digite o valor do cateto adjacente'))
hipo= math.hypot(opo, adj)
print(f'O valor  da hipotenusa é {hipo:.2f}')

