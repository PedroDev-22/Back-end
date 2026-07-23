class employ:
    def __init__(self, primeironome, segundonome, salarioanual):
        self.primeironome = primeironome
        self.segundonome = segundonome
        self.salarioanual = salarioanual

    def giveraise(self, soma=4000):
        self.salarioanual += soma
        print(f'Nome: {self.primeironome + " " + self.segundonome} \n'
              f'Salário atual: {self.salarioanual}')
