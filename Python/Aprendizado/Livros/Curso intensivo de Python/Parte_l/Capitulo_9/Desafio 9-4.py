class restaurante():
    def __init__(self, nome, tipo):
        self.nome = nome
        self.tipo = tipo
        self.clientes_atendidos = 0

    def descrever_restaurante(self):
        print(f'O restaurante {self.nome} é do tipo {self.tipo}.')

    def abrir_restaurante(self):
        print(f'O restaurante {self.nome} está aberto')
    
    def definir_numeros_de_servidos(self, novos_clientes):
        self.clientes_atendidos = novos_clientes

    def incrementar_numero_de_servidos(self, incrementação):
        self.clientes_atendidos += incrementação

    def mostrar_servidos(self):
        print(f'{self.clientes_atendidos} clientes foram atendidos')


meu_restaurante = restaurante('Rei da pizza', 'Italiana')

print(f'O nome do meu restaurante é {meu_restaurante.nome}')
print(f'O tipo do {meu_restaurante.nome} é {meu_restaurante.tipo}')
meu_restaurante.definir_numeros_de_servidos(5)
meu_restaurante.incrementar_numero_de_servidos(3)
meu_restaurante.mostrar_servidos()