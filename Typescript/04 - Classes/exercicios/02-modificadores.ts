class Carro {
    marca: string;
    modelo: string;
    ano: number;
    private ligado: boolean;
    
    constructor(marca: string, modelo: string, ano: number, ligado: boolean) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = ligado;
    }

    public ligar(): void {
        this.ligado = true;
        console.log("Carro ligado");
    }

    public estaLigado(): boolean {
        return this.ligado;
    }

    public desligar(): void {
        this.ligado = false;
        console.log("Carro desligado");
    }

    status(): string {
        return `${this.marca} ${this.modelo} (${this.ano}) - ${this.ligado ? "Ligado" : "Desligado"}`;
    }
}

const carro = new Carro("BMW","I-3", 2013, false);
carro.ligar();
carro.estaLigado();
carro.desligar();
console.log(carro.status());
