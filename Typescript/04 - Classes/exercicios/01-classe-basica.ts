class Carro {
    marca: string;
    modelo: string;
    ano: number;
    ligado: boolean;
    
    constructor(marca: string, modelo: string, ano: number, ligado: boolean) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = ligado;
    }

    ligar(): void {
        this.ligado = true;
        console.log("Carro ligado");
    }

    desligar(): void {
        this.ligado = false;
        console.log("Carro desligado");
    }

    status(): string {
        return `${this.marca} ${this.modelo} (${this.ano}) - ${this.ligado ? "Ligado" : "Desligado"}`;
    }
}

const carro = new Carro("BMW","I-3", 2013, false);
carro.ligar();
carro.desligar();
console.log(carro.status());