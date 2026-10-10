import express, { NextFunction, Request, Response } from "express";
import routerConvidados from './routes/convidados.js'

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    const date = new Date();
    const hora = date.toLocaleTimeString();
    console.log(`${hora} tentativa de acesso em: ${req.url}`)
    next();
});

app.use('/convidados', routerConvidados);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.message === "Nome do convidado é obrigatório") {
        res.status(400).json({
            mensagem: "Nome do convidado é obrigatório"
        })
    } else {
        res.status(500).json({
            mensagem: "Erro",
            erro: err.message
        })
    }
})

app.listen(3000, () => console.log("Server rodando na porta 3000"));
