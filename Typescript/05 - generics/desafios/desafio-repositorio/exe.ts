interface Entidade {
    id: number;
}

class Repositorio<T extends Entidade> {
    private itens: T[];
    constructor(itens: T[] = []) {
        this.itens = itens;
    }

    adicionar(item: T): void {
        this.itens.push(item);
    }

    buscarPorId(id: number): T | undefined {
        return this.itens.find((item) => item.id === id);
    }

    listarTodos(): T[] {
        return [...this.itens];
    }

    atualizar(id: number, dados: Partial<T>): boolean {
        const index = this.itens.findIndex(item => item.id === id);
        if (index !== -1) {
            this.itens[index] = { ...this.itens[index], ...dados } as T;
            return true;
        }
        return false;
    }

    remover(id: number): boolean {
        const tamanhoOriginal = this.itens.length;
        this.itens = this.itens.filter((item) => item.id !== id);
        return this.itens.length !== tamanhoOriginal;
    }
}

// Teste Usuário
interface Usuario extends Entidade {
    nome: string;
    email: string;
}
const user = new Repositorio<Usuario>();
const user1: Usuario = {
    id: 1,
    nome: "Pedro",
    email: "pedro@example.com"
}

const user2: Usuario = {
    id: 2,
    nome: "Maria",
    email: "maria@example.com"
}

user.adicionar(user1);
user.adicionar(user2);
console.log(user.atualizar(1, { email: "pedro12@example.com" }));
console.log(user.buscarPorId(2));
console.log(user.listarTodos());
console.log(user.remover(1));

// Teste Produto
interface Produto extends Entidade {
    nome: string;
    preco: number;
}
const product = new Repositorio<Produto>();

const produto1: Produto = {
    id: 3,
    nome: "Óleo",
    preco: 7.49
}

const produto2: Produto = {
    id: 4,
    nome: "Gengibre",
    preco: 3.59
}

product.adicionar(produto1);
product.adicionar(produto2);
console.log(product.atualizar(3, { preco: 4.99 }));
console.log(product.buscarPorId(4));
console.log(product.remover(4));
console.log(product.listarTodos());