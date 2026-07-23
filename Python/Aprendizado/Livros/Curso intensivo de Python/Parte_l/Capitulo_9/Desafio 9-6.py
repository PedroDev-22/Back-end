class restaurante():
    def __init__(self, nome, tipo):
        self.nome = nome
        self.tipo = tipo

    def descrever_restaurante(self):
        print(f'O restaurante {self.nome} é do tipo {self.tipo}.')

    def abrir_restaurante(self):
        print(f'O restaurante {self.nome} está aberto')

meu_restaurante = restaurante('Rei da pizza', 'Italiana')
'''
print(f'O nome do meu restaurante é {meu_restaurante.nome}')
print(f'O tipo do {meu_restaurante.nome} é {meu_restaurante.tipo}')'''

class sorveteria(restaurante):
    def __init__(self, nome, tipo):
        super().__init__( nome, tipo)

    def sabores_sorvete(self, *sabores):
        print('Sabores de sorvete do restaurante:')
        for sabor in sabores:
            if sabor == sabores[-1]:
                print(sabor)
            else:
                print(sabor, end=', ')
        print()

minha_sorveteria = sorveteria('Bom sabor', 'Sorveteria')
print(f'O nome do meu restaurante é {minha_sorveteria.nome}')
print(f'O tipo do meu restaurante é {minha_sorveteria.tipo}')
minha_sorveteria.sabores_sorvete('Baunilha', 'Morango', 'Chocolate')