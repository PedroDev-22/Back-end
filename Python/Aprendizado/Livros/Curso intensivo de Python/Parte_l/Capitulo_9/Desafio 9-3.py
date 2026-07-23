class user():
    def __init__(self, PrimeiroNome, SegundoNome):
        self.PrimeiroNome = PrimeiroNome
        self.SegundoNome = SegundoNome
        self.NomeCompleto = PrimeiroNome + ' ' + SegundoNome

    def descrever_usuário(self):
        print(f'\nO primeiro nome do usuário é {self.PrimeiroNome.title()} e o segundo é {self.SegundoNome.title()}')

    def saudação(self):
        print(f'Olá, {self.NomeCompleto.title()}')

usuário = user('Pedro', 'arthur')

usuário.descrever_usuário()
usuário.saudação()

usuário = user('Maria', 'Cecilía')

usuário.descrever_usuário()
usuário.saudação()

usuário = user('Maitê', 'Ferreira')

usuário.descrever_usuário()
usuário.saudação()