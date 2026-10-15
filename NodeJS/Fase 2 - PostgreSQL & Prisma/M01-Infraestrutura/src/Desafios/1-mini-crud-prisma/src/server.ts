import express, { Request, Response, NextFunction } from "express";
import router from "./routes/tarefas.js";

const app = express();
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Bem vindo ao servidor de tarefas");

    next();
});

app.use('/tarefas', router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("ERRO COMPLETO:", err);
    if (err.code === 'P2025') {
        return res.status(404).json({
            mensagem: "Tarefa com id fornecido não existe"
        })
    }
    res.status(500).json({
        mensagem: `Ocorreu um erro no servidor: ${err.message}`
    })

});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));


// CRUD feito antes de adicionar "categoria" no schema.prisma