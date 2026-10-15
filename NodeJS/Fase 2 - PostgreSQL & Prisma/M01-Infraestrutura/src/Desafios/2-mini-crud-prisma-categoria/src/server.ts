import express, { Request, Response, NextFunction } from "express";
import routerTarefas from "./routes/tarefas.js";
import routerCategorias from "./routes/categorias.js"

const app = express();
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Bem vindo ao servidor de tarefas");

    next();
});

app.use('/tarefas', routerTarefas);
app.use('/categorias', routerCategorias);
app.use((req, res) => res.status(404).json({ erro: 'Rota não encontrada' }));

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("ERRO COMPLETO:", err);
    if (err.code === 'P2025') {
        return res.status(404).json({
            mensagem: "Tarefa com id fornecido não existe"
        })
    } else if (err.code === 'P2003' || err.message === "Categoria não encontrada") {
        return res.status(404).json({
            mensagem: "Categoria não encontrada"
        })
    } else if (err.message === "Titulo é obrigatório") {
        return res.status(400).json({ mensagem: "Titulo é obrigatório" });
    } else if (err.message === "Você precisa informar o id da tarefa") {
        return res.status(400).json({ mensagem: "Você precisa informar o id da tarefa" });
    }

    res.status(500).json({
        mensagem: `Ocorreu um erro no servidor: ${err.message}`
    });
})
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));


// CRUD feito depois de adicionar "categoria" no schema.prisma

// --- Pendências ---
// Add mudar categoria da tarefa no put de tarefas.ts
// Add get de tarefas com categoria (final do arquivo categorias.ts)
/* Nas tarefas da categoria:
    • É preciso adiciona-las no post de tarefas.ts 
    • Devo atualiza-las no put (mudar categoria dela. Fazer também um if para ver se o user quer atualizar categoria, titulo, ou os dois)
    • No delete, preciso tirar a tarefa de categoria quando for deleta-la
- Ver possíveis diferentes caminhos (se houver algum ai)
*/