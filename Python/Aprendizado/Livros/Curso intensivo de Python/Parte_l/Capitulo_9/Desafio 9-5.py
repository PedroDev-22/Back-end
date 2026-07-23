class user():
    total_logins = 0
    def __init__(self, PrimeiroNome, SegundoNome):
        self.PrimeiroNome = PrimeiroNome
        self.SegundoNome = SegundoNome
        self.NomeCompleto = PrimeiroNome + ' ' + SegundoNome
        self.NumeroDeLogins = 0

    def descrever_usuário(self):
        print(f'\nO primeiro nome do usuário é {self.PrimeiroNome.title()} e o segundo é {self.SegundoNome.title()}')

    def saudação(self):
        print(f'Olá, {self.NomeCompleto.title()}')

    def incrementar_numero_de_logins(self):
        user.total_logins += 1
        print(f'Números de logins: {user.total_logins}')

    def resetar_logins(self):
        user.total_logins = 0
        print('\nLogins resetados')
        print(f'Número total de logins: {user.total_logins}')

usuário = user('Pedro', 'arthur')

usuário.descrever_usuário()
usuário.saudação()
usuário.incrementar_numero_de_logins()

usuário = user('Maria', 'Cecilía')

usuário.descrever_usuário()
usuário.saudação()
usuário.incrementar_numero_de_logins()

usuário = user('Maitê', 'Ferreira')

usuário.descrever_usuário()
usuário.saudação()
usuário.incrementar_numero_de_logins()
usuário.resetar_logins()