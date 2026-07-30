"use strict";
class Funcionario {
    nome;
    salarioBase;
    id;
    constructor(nome, salarioBase, id) {
        this.nome = nome;
        this.salarioBase = salarioBase;
        this.id = id;
    }
    apresentar() {
        return `ID: ${this.id} - ${this.nome}`;
    }
}
class Desenvolvedor extends Funcionario {
    nivel;
    constructor(nome, salarioBase, id, nivel) {
        super(nome, salarioBase, id);
        this.nivel = nivel;
    }
    calcularSalario() {
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
    bonus;
    constructor(nome, salarioBase, id, bonus) {
        super(nome, salarioBase, id);
        this.bonus = bonus;
    }
    calcularSalario() {
        return this.salarioBase * (1 + this.bonus);
    }
}
const dev = new Desenvolvedor("Pedro", 5000, 1, "pleno");
const gerente = new Gerente("Ana", 8000, 1, 0.25);
console.log(dev.apresentar());
console.log(gerente.apresentar());
console.log(dev.calcularSalario());
console.log(gerente.calcularSalario());
