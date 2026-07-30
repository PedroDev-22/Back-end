class Carro {
    private _velocidade: number = 0;

    get velocidade(): number {
        return this._velocidade;
    }

    set velocidade(valor: number) {
        if (valor < 0) {
            console.log("Não aceitamos valores negativos")
            return;
        }
        if (valor > 200) {
            console.log("Velocidade máxima é 200");
            return;
        }
        this._velocidade = valor;
    }
}

const car = new Carro();
// car._velocidade = 10 -> erro
car.velocidade = 150;
console.log(car.velocidade);
car.velocidade = -10;
car.velocidade = 250;