abstract class Funcionario {
    protected nome: string;
    protected salarioBase: number;
    private readonly id: number;

    constructor(nome: string, salarioBase: number, id: number) {
        this.nome = nome;
        this.salarioBase = salarioBase;
        this.id = id;
    }

    abstract calcularSalario(): number;

    apresentar(): string {
        return `ID: ${this.id} - ${this.nome}`;
    }
}

class Desenvolvedor extends Funcionario {
    nivel: "junior" | "pleno" | "senior";
    constructor(nome: string, salarioBase: number, id: number, nivel: "junior" | "pleno" | "senior") {
        super(nome, salarioBase, id);
        this.nivel = nivel;
    }

    calcularSalario(): number {
        if (this.nivel === 'junior') {
            return this.salarioBase * 1.0;
        }
        else if (this.nivel === 'pleno') {
            return this.salarioBase * 1.3;
        }
        else if (this.nivel === 'senior') {
            return this.salarioBase * 1.6;
        }
        return this.salarioBase;
    }
}

class Gerente extends Funcionario {
    bonus: number
    constructor(nome: string, salarioBase: number, id: number, bonus: number) {
        super(nome, salarioBase, id);
        this.bonus = bonus;
    }

    calcularSalario(): number {
        return this.salarioBase * (1 + this.bonus);
    }

}

const dev = new Desenvolvedor("Pedro", 5000, 1, "pleno");
const gerente = new Gerente("Ana", 8000, 1, 0.25);

console.log(dev.apresentar());
console.log(gerente.apresentar());

console.log(dev.calcularSalario());
console.log(gerente.calcularSalario());