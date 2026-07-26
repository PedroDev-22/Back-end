type Produto = {
    nome: string;
    preco: number;
    descricao?: string;
    desconto?: number;
}

const produto1: Produto = {
    nome: "Feijão",
    preco: 12.99
}

const produto2: Produto = {
    nome: "Açucar",
    preco: 8.49,
    descricao: "Açucar da marca sugar",
    desconto: 0.99
}

const resumoProduto = (produto: Produto):string => {
    let msg: string = `Produto: ${produto.nome} - ${produto.preco}`;
    
    if (produto.descricao) {
        msg += `\nDescrição: ${produto.descricao}`;
    } if (produto.desconto) {
        msg += `\nCom desconto de ${produto.desconto}%`;
    } 
    return msg;
}

console.log(resumoProduto(produto1));
console.log(resumoProduto(produto2));