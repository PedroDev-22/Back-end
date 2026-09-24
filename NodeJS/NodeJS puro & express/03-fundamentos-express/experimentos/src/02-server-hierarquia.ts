import express, { Request, Response, NextFunction } from 'express';
import routerProdutos from './routes/02-produtos-hierarquia.js';

const app = express();

app.use((req, res, next) => {
    console.log("-> 1. Passou pelo global");
    next();
});

app.use('/produtos', routerProdutos);

app.get('/quebra', (req, res, next) => {
    try {
        throw new Error("O banco de dados explodiu!");
    } catch (err) {
        next(err);
    }
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log("=== Ambulância de erro acionada ===");
    console.error(err.stack); // Mostra onde o errou nasceu no código
    
    res.status(500).json({
        status: "Erro interno",
        mensagem: "Ops! Algo de errado. Nossa equipe já foi avisada",
        causa: err.message
    });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
