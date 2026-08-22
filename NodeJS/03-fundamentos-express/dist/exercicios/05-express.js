import express from 'express';
const produtos = [
    { id: 1, nome: "Teclado", preco: 150 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Monitor", preco: 900 }
];
const app = express();
app.get('/produtos', (req, res) => {
    const max_preco = req.params;
    const produtosFiltrados = produtos.filter((produto) => produto.preco >= Number(max_preco));
    res.status(200).json({
        mensagem: "Produtos filtrados",
        produtos: produtosFiltrados
    });
});
app.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const produtoEncontrado = produtos.find((produto) => produto.id === Number(id));
    if (produtoEncontrado !== undefined) {
        res.status(200).json({
            mensagem: "Produto encontrado",
            produto: produtoEncontrado
        });
    }
    else {
        res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }
});
app.use(express.json());
app.post('/produtos', (req, res) => {
    const novoProduto = req.body;
    produtos.push(novoProduto);
    res.status(201).json({
        mensagem: "Produto criado",
        produto: novoProduto
    });
});
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
//# sourceMappingURL=05-express.js.map