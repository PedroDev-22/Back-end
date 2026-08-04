"use strict";
class Repositorio {
    itens;
    constructor(itens = []) {
        this.itens = itens;
    }
    adicionar(item) {
        this.itens.push(item);
    }
    buscarPorId(id) {
        return this.itens.find((item) => item.id === id);
    }
    listarTodos() {
        return [...this.itens];
    }
    atualizar(id, dados) {
        const index = this.itens.findIndex(item => item.id === id);
        if (index !== -1) {
            this.itens[index] = { ...this.itens[index], ...dados };
            return true;
        }
        return false;
    }
    remover(id) {
        const tamanhoOriginal = this.itens.length;
        this.itens = this.itens.filter((item) => item.id !== id);
        return this.itens.length !== tamanhoOriginal;
    }
}
const user = new Repositorio();
const user1 = {
    id: 1,
    nome: "Pedro",
    email: "pedro@example.com"
};
const user2 = {
    id: 2,
    nome: "Maria",
    email: "maria@example.com"
};
user.adicionar(user1);
user.adicionar(user2);
console.log(user.atualizar(1, { email: "pedro12@example.com" }));
console.log(user.buscarPorId(2));
console.log(user.listarTodos());
console.log(user.remover(1));
const product = new Repositorio();
const produto1 = {
    id: 3,
    nome: "Óleo",
    preco: 7.49
};
const produto2 = {
    id: 4,
    nome: "Gengibre",
    preco: 3.59
};
product.adicionar(produto1);
product.adicionar(produto2);
console.log(product.atualizar(3, { preco: 4.99 }));
console.log(product.buscarPorId(4));
console.log(product.remover(4));
console.log(product.listarTodos());
