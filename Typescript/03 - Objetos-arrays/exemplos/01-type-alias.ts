type Produto = {
    nome: string,
    preco: number,
    disponivel: boolean
};

let meuProduto: Produto = { nome: "Arroz", preco: 17.99, disponivel: true };

const resumoProduto = (produto: Produto) => {
    return `Produto: ${produto.nome} - R$ ${produto.preco} - ${produto.disponivel ? "Disponivel" : "Indisponivel"}`;
}

console.log(resumoProduto(meuProduto));