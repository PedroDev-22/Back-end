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

class admin(user):
    def __init__(self, PrimeiroNome, SegundoNome):
        super().__init__(PrimeiroNome, SegundoNome)
        self.privilegios = ['conseguir adicionar posts', 'conseguir deletar posts',
                            'conseguir banir usuários', 'conseguir desbanir usuários']
    
    def descrever_usuário(self):
        return super().descrever_usuário() 
    
    def saudação(self):
        return super().saudação()
    
    def mostrar_privilegios(self):
        print('Você é um admin')
        print('Privilégios do administrador:')    
        for privilegio in self.privilegios:

            if privilegio == self.privilegios[-1]:
                print(privilegio)
            else:
                print(privilegio, end=', ')

Admin = admin('Pedro', 'arthur')

Admin.descrever_usuário()
Admin.saudação()
Admin.mostrar_privilegios()

usuário = user('Maria', 'Cecilía')

usuário.descrever_usuário()
usuário.saudação()

usuário = user('Maitê', 'Ferreira')

usuário.descrever_usuário()
usuário.saudação()