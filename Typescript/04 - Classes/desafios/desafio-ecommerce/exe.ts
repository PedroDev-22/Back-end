abstract class Produto {
    protected _id: number;
    protected _nome: string;
    protected _preco: number;
    protected estoque: number
    constructor(id: number, nome: string, preco: number, estoque: number) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this.estoque = estoque;
    }

    abstract calcularPrecoFinal(): number;

    vender(quantidade: number): string {
        if (this.estoque >= quantidade) {
            this.estoque -= quantidade;
            return `${quantidade} unidades vendidas de ${this._nome}`;
        } else {
            return `Erro, temos apenas ${this.estoque} em estoque`;
        }
    }

    reporEstoque(quantidade: number): void {
        this.estoque += quantidade;
    }

    consultarEstoque(): string {
        if (this.estoque === 0) {
            return `${this.nome} - ${this.estoque} restante`;
        } else {
            return `${this.nome} - ${this.estoque} restantes`;
        }
    }

    get nome(): string {
        return this._nome;
    }

    get id(): number {
        return this._id;
    }

    get preco(): number {
        return this._preco;
    }
}

class ProdutoFisico extends Produto {
    pesoKG: number;
    constructor(id: number, nome: string, preco: number, estoque: number, pesoKG: number) {
        super(id, nome, preco, estoque);
        this.pesoKG = pesoKG;
    }

    calcularPrecoFinal(): number {
        return this._preco + (this.pesoKG * 5);
    }
}

class ProdutoDigital extends Produto {
    constructor(id: number, nome: string, preco: number, estoque: number) {
        super(id, nome, preco, estoque);
    }
    calcularPrecoFinal(): number {
        return this._preco * 0.9;
    }
}

class CarrinhoDeCompras {
    private itens: Produto[];
    constructor(itens: Produto[]) {
        this.itens = itens;
    }

    adicionarProduto(produto: Produto): string {
        this.itens.push(produto);
        return `Produto ${produto.nome} adicionado`
    }

    removerProduto(id: number): string {
        const novaLista = this.itens.filter(item => item.id !== id)
        if (this.itens.length === novaLista.length) {
            return `Produto com id ${id} não encontrado`
        } else {
            this.itens = novaLista;
            return `Produto com id ${id} removido`
        }
    }

    calcularTotal(): number {
        let total: number = 0;
        this.itens.forEach(item => {
            total += item.calcularPrecoFinal();
        })
        return total;
    }
    listarItens(): string[] {
        const itensListados: string[] = [];
        this.itens.forEach((item) => {
            itensListados.push(`${item.nome} - R$ ${item.calcularPrecoFinal()}`)
        })

        return itensListados;
    }
};

const fisico1 = new ProdutoFisico(1, "Notebook", 3500, 3, 1.5);
const fisico2 = new ProdutoFisico(2, "Mouse", 50, 50, 0.2);
const digital1 = new ProdutoDigital(3, "Curso TS", 200, 100);
const digital2 = new ProdutoDigital(4, "E-book", 30, 200);
const carrinho = new CarrinhoDeCompras([])

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