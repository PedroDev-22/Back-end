cont = 0
contador = 0
c = 0
while True:
    print('\033[31m0\033[m', end='')
    cont += 1
    if cont == 1:
        print('\033[31m1\033[m', end='')
    elif cont == 3:
        print('\033[31m1\033[m', end='')
        c += 1
        contador += 1
    elif cont == 5:
        print('\033[31m1\033[m', end='')
        contador += 1
        c += 1
    elif c == 2:
        print('\033[31m1\033[m', end='')
        c = 0
        cont = 0
        contador = 0
        
    
        
    