type ContaBancaria = {
    readonly numeroConta: string;
    titular: string;
    readonly dataAbertura: Date;
    saldo: number;
}

const conta1: ContaBancaria = {
    numeroConta: "xxx-xxx-xx-x",
    titular: "Lucas",
    dataAbertura: new Date(), // Pode-se usar {new Date("2024-01-15")} para criar hora especifica
    saldo: 892.23
};

// conta1.numeroConta = '000' -> Erro
// conta1.dataAbertura = new Date(); -> Erro
conta1.saldo = 346.67;

console.log(conta1);