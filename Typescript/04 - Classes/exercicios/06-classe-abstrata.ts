abstract class Animal {
    private nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }

    abstract fazerSom(): string;

    public apresentar(): string {
        return `Meu nome é ${this.nome}`;
    }
};

class Cachorro extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    fazerSom(): string {
        return `Au au!`
    }
}

class Gato extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    fazerSom(): string {
        return `Miau!`
    }
}

const gato = new Gato("Garfield");
const cachorro = new Cachorro("Bethoven");

console.log(gato.apresentar());
console.log(gato.fazerSom());
console.log(cachorro.apresentar());
console.log(cachorro.fazerSom());