class Pilha<T> {
    private itens: T[];
    constructor(itens: T[] = []) {
        this.itens = itens;
    }

    empilhar(item: T): void {
        this.itens.push(item);
    }

    desempilhar(): T | undefined {
        return this.itens.pop();
    }

    verTopo(): T | undefined {
        return this.itens[this.itens.length - 1];
    }

    estaVazia(): boolean {
        return this.itens.length <= 0;
    }
}

const pilhaNumeros = new Pilha<number>();
pilhaNumeros.empilhar(10);
pilhaNumeros.empilhar(20);
console.log(pilhaNumeros.verTopo());      // 20
console.log(pilhaNumeros.desempilhar());  // 20
console.log(pilhaNumeros.verTopo());      // 10

const pilhaNomes = new Pilha<string>();
pilhaNomes.empilhar("Pedro");
console.log(pilhaNomes.estaVazia());      // false