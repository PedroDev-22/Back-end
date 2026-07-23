from random import randint

class Dado():
    def __init__(self, vezes, lados=6):
        self.vezes = vezes
        self.lados = lados

    
    def rolar_dado(self):
        print(f'\nDado de {self.lados} lados e {self.vezes} vezes:')
        for quant in range(0, self.vezes):
            print(randint(1, self.lados), end=' -> ')
        print('Fim')
            

dado = Dado(10)

dado.rolar_dado()

dado = Dado(10, 10)

dado.rolar_dado()

dado = Dado(10, 20)

dado.rolar_dado()