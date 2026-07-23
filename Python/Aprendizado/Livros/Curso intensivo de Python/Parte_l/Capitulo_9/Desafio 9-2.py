class restaurante():
    def __init__(self, nome, tipo, idade, fundacao, fundador):
        self.nome = nome
        self.tipo = tipo
        self.idade = str(idade)
        self.fundação = fundacao
        self.fundador = fundador

    def descrever_restaurante(self):
        print(f'O restaurante {self.nome} é do tipo {self.tipo}. '
              f'Ele tem {self.idade} anos de idade e foi fundado em {self.fundação} por {self.fundador}')

    def abrir_restaurante(self):
        print(f'O restaurante {self.nome} está aberto')
    

meu_restaurante = restaurante('Rei da pizza', 'Italiana', 15, '2010', 'Pedro')

meu_restaurante.descrever_restaurante()
meu_restaurante.abrir_restaurante()
