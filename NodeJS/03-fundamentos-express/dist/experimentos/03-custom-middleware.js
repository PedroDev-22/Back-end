import express from 'express';
const app = express();
const meuLogger = (req, res, next) => {
    const data = new Date().toISOString();
    const { method, url } = req;
    console.log(`[${data}] Chamada recebida: ${method} ${url}`);
    next();
};
app.use(meuLogger);
app.get('/teste', (req, res) => {
    res.send("Rota de teste alcançada!");
});
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
//# sourceMappingURL=03-custom-middleware.js.map