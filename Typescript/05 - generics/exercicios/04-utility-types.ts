interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
}

type ProdutoParaAtualizar = Partial<Produto>;

function atualizarProduto(produto: Produto, atualizacao: ProdutoParaAtualizar): Produto {
    return {...produto, ...atualizacao };
}

const produto = { id: 1, nome: "Notebook", preco: 3000, descricao: "Dell" };
const atualizado = atualizarProduto(produto, { preco: 2500 });
console.log(atualizado);