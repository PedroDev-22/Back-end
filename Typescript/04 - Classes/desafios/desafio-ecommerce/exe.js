"use strict";
class Produto {
    _id;
    _nome;
    _preco;
    estoque;
    constructor(id, nome, preco, estoque) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this.estoque = estoque;
    }
    vender(quantidade) {
        if (this.estoque >= 1) {
            this.estoque--;
            return `Sucesso`;
        }
        else {
            return `Erro, não possui estoque`;
        }
    }
    reporEstoque(quantidade) {
        this.estoque = quantidade;
    }
    consultarEstoque() {
        if (this.estoque === 0) {
            return `${this.nome} - ${this.estoque} restante`;
        }
        else {
            return `${this.nome} - ${this.estoque} restantes`;
        }
    }
    get nome() {
        return this._nome;
    }
    get id() {
        return this._id;
    }
    get preco() {
        return this._preco;
    }
}
class ProdutoFisico extends Produto {
    pesoKG;
    constructor(id, nome, preco, estoque, pesoKG) {
        super(id, nome, preco, estoque);
        this.pesoKG = pesoKG;
    }
    calcularPrecoFinal() {
        return this._preco + (this.pesoKG * 5);
    }
}
class ProdutoDigital extends Produto {
    constructor(id, nome, preco, estoque) {
        super(id, nome, preco, estoque);
    }
    calcularPrecoFinal() {
        return this._preco * 0.9;
    }
}
class CarrinhoDeCompras {
    itens;
    constructor(itens) {
        this.itens = itens;
    }
    adicionarProduto(produto) {
        this.itens.push(produto);
        return `Produto ${produto.nome} adicionado`;
    }
    removerProduto(id) {
        const novaLista = this.itens.filter(item => item.id !== id);
        if (this.itens === novaLista) {
            return `Produto com ${id} não encontrado`;
        }
        else {
            this.itens = novaLista;
            return `Produto com ${id} removido`;
        }
    }
    calcularTotal() {
        let total = 0;
        this.itens.forEach(item => {
            total += item.calcularPrecoFinal();
        });
        return total;
    }
    listarItens() {
        const itensListados = [];
        this.itens.forEach((item) => {
            itensListados.push(`${item.nome} - R$ ${item.calcularPrecoFinal()}`);
        });
        return itensListados;
    }
}
;
const fisico1 = new ProdutoFisico(1, "Notebook", 3500, 3, 1.5);
const fisico2 = new ProdutoFisico(2, "Mouse", 50, 50, 0.2);
const digital1 = new ProdutoDigital(3, "Curso TS", 200, 100);
const digital2 = new ProdutoDigital(4, "E-book", 30, 200);
const carrinho = new CarrinhoDeCompras([]);
console.log(fisico1.calcularPrecoFinal());
console.log(fisico2.consultarEstoque());
console.log(digital1.consultarEstoque());
console.log(digital2.vender(10));
console.log(carrinho.adicionarProduto(fisico1));
console.log(carrinho.adicionarProduto(fisico2));
console.log(carrinho.adicionarProduto(digital1));
console.log(carrinho.adicionarProduto(digital2));
console.log(carrinho.listarItens());
console.log(carrinho.removerProduto(3));
console.log(carrinho.listarItens());
console.log(carrinho.calcularTotal());
