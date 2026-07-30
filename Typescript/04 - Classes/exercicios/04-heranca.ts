class Veiculo {
    marca: string;
    ano: number;

    constructor(marca: string, ano: number) {
        this.marca = marca
        this.ano = ano
    }

    descricao(): string {
        return `${this.marca} (${this.ano})`
    }
}

class Moto extends Veiculo {
    cilindradas: number;

    constructor(marca: string, ano: number, cilindradas: number) {
        super(marca, ano);
        this.cilindradas = cilindradas;
    }

    descricao(): string {
        return `${this.marca} (${this.ano}) - ${this.cilindradas}`
    }
}

const moto = new Moto("Kawasaki", 2011, 500);
console.log(moto.descricao())