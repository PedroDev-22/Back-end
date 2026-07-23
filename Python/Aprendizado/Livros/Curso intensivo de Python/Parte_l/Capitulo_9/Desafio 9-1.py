class restaurante():
    def __init__(self, nome, tipo):
        self.nome = nome
        self.tipo = tipo

    def descrever_restaurante(self):
        print(f'O restaurante {self.nome} é do tipo {self.tipo}.')

    def abrir_restaurante(self):
        print(f'O restaurante {self.nome} está aberto')

meu_restaurante = restaurante('Rei da pizza', 'Italiana')

print(f'O nome do meu restaurante é {meu_restaurante.nome}')
print(f'O tipo do {meu_restaurante.nome} é {meu_restaurante.tipo}')

