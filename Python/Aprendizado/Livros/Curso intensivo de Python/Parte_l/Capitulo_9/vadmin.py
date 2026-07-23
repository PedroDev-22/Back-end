import user

class privilégios():
    def __init__(self, privilégios=['conseguir adicionar posts', 'conseguir deletar posts',
                                    'conseguir banir usuários', 'conseguir desbanir usuários']):
        self.privilegios = privilégios

    def mostrar_privilégios(self):
        print('Você é um admin')
        print('Privilégios de admin:')
        for privilegio in self.privilegios:

            if privilegio == self.privilegios[-1]:
                print(privilegio)
            else:
                print(privilegio, end=', ')
        

class admin(user.user):
    def __init__(self, PrimeiroNome, SegundoNome):
        super().__init__(PrimeiroNome, SegundoNome)
        self.privilegios = privilégios()
    
    def descrever_usuário(self):
        return super().descrever_usuário() 
    
    def saudação(self):
        return super().saudação()
    
    def mostrar_privilegios(self):
        return privilégios.mostrar_privilégios(self.privilegios)