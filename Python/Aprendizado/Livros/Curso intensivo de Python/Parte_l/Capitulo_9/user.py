class user():
    def __init__(self, PrimeiroNome, SegundoNome):
        self.PrimeiroNome = PrimeiroNome
        self.SegundoNome = SegundoNome
        self.NomeCompleto = PrimeiroNome + ' ' + SegundoNome

    def descrever_usuário(self):
        print(f'\nO primeiro nome do usuário é {self.PrimeiroNome.title()} '
              f'e o segundo é {self.SegundoNome.title()}')

    def saudação(self):
        print(f'Olá, {self.NomeCompleto.title()}')