import express from 'express';
const app = express();
app.use(express.json());
app.post('/livros', (req, res) => {
    const novoLivro = req.body;
    console.log("Recebi um novo livro:", novoLivro);
    res.status(201).json({
        mensagem: "Livro recebido com sucesso",
        dados: novoLivro
    });
});
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
//# sourceMappingURL=express-json.js.map