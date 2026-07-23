class Car():
    """Uma tentativa simples de representar um carro."""
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()
    
    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on"
        "it.")

    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("Você não pode reiniciar um andometro!")

    def increment_odometer(self, miles):
        self.odometer_reading += miles

class Battery():
    def __init__(self, tamanho_da_bateria=70):
        self.tamanho_da_bateria = tamanho_da_bateria

    def descrever_bateria(self):
        print(f'Esse carro tem uma bateria de {self.tamanho_da_bateria}-kwh')

    def get_range(self):
        if self.tamanho_da_bateria == 70:
            range = 240
        elif self.tamanho_da_bateria == 85:
            range = 270

        message = "Esse carro consegue ir a aproximadamente " + str(range)
        message += " milhas com uma bateria cheia."
        print(message)

    def melhorar_bateria(self):
        if self.tamanho_da_bateria != 85:
            self.tamanho_da_bateria = 85

class ElectricCar(Car):

    def __init__(self, make, model, year):
        super().__init__(make, model, year)
        self.battery = Battery()

    def fill_gas_tank():
        print('Esse carro não tem um tanque de gasolina')

my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())
my_tesla.battery.descrever_bateria()
my_tesla.battery.get_range()

my_tesla.battery.melhorar_bateria()
my_tesla.battery.descrever_bateria()
my_tesla.battery.get_range()