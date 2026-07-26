interface Veiculo {
    marca: string;
    ano: number;
}

interface Carro extends Veiculo {
    portas: number;
    ligar(): void;
}

const meuCarro: Carro = {
    marca: "Audi",
    ano: 2011,
    portas: 2,
    ligar: () => console.log("Carro ligado")
}

meuCarro.ligar();