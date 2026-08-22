import express from 'express';
const app = express();
app.get('/vendas', (req, res) => {
    // res.send("Olá com express!");
    const { min, categoria } = req.query;
    console.log(`Filtrando vendas maiores que ${min} na categoria: ${categoria}`);
    res.json({
        mensagem: "Filtro recebido",
        filtros: { min, categoria }
    });
});
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor express rodando em http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map