import express from 'express';
import routerTarefas from './routes/tarefas.js';
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log("Servidor iniciado");
    next();
});
app.use('/tarefas', routerTarefas);
app.use((err, req, res, next) => {
    if (err.message === "Tarefa não encontrada") {
        res.status(404).json({
            mensagem: `Tarefa não encontrada`
        });
    }
    else {
        res.status(500).json({
            mensagem: "Erro",
            erro: err.message
        });
    }
});
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
//# sourceMappingURL=server.js.map