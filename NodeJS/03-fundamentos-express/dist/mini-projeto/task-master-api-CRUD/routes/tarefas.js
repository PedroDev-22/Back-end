import { Router } from "express";
import { readFile, writeFile } from "node:fs/promises";
const router = Router();
async function buscarTarefas() {
    const file = await readFile('../tarefas.json', { encoding: "utf-8" });
    if (file === '') {
        return [];
    }
    return JSON.parse(file);
}
async function salvarTarefas(tarefas) {
    const dadosString = JSON.stringify(tarefas, null, 2);
    await writeFile('../tarefas.json', dadosString);
    console.log("Tarefas carregadas");
}
router.get('/', async (req, res, next) => {
    let tarefas = await buscarTarefas();
    const filtro = req.query.concluida;
    let tarefasFiltradas = [];
    if (filtro === 'true') {
        tarefasFiltradas = tarefas.filter((tarefa) => tarefa.concluida);
        if (tarefasFiltradas.length > 0) {
            res.status(200).json({
                mensagem: "Tarefas concluídas encontradas",
                tarefas: tarefasFiltradas
            });
        }
        else {
            res.status(200).json({
                mensagem: "Não existem tarefas concluídas",
                tarefas: []
            });
        }
    }
    else if (filtro === 'false') {
        tarefasFiltradas = tarefas.filter((tarefa) => !tarefa.concluida);
        if (tarefasFiltradas.length > 0) {
            res.status(200).json({
                mensagem: "Tarefas inconcluídas encontradas",
                tarefas: tarefasFiltradas
            });
        }
        else {
            res.status(200).json({
                mensagem: "Não existem tarefas inconcluídas",
                tarefas: []
            });
        }
    }
    else {
        tarefasFiltradas = tarefas;
        if (tarefasFiltradas.length > 0) {
            res.status(200).json({
                mensagem: "Tarefas encontradas",
                tarefas: tarefasFiltradas
            });
        }
        else {
            res.status(200).json({
                mensagem: "Não existem tarefas",
                tarefas: []
            });
        }
    }
    next();
});
router.post('/', async (req, res, next) => {
    const tarefas = await buscarTarefas();
    let maiorId = tarefas.reduce((max, task) => task.id > max ? task.id : max, 1);
    const tarefa = req.body;
    tarefa.id = maiorId;
    const tarefaAdd = tarefa;
    if (tarefaAdd.id === maiorId) {
        tarefas.push(tarefaAdd);
        maiorId++;
    }
    await salvarTarefas(tarefas);
    res.status(201).json({
        mensagem: "Tarefa Criada",
        tarefa: tarefas
    });
});
router.put('/:id', async (req, res, next) => {
    const tarefas = await buscarTarefas();
    const { id } = req.params;
    let concluida = false;
    tarefas.forEach(tarefa => {
        if (tarefa.id === Number(id)) {
            tarefa.concluida = !tarefa.concluida;
            concluida = tarefa.concluida;
        }
        else {
            return next(new Error("Tarefa não encontrada"));
        }
    });
    await salvarTarefas(tarefas);
    res.status(200).json({
        mensagem: concluida ? `Tarefa marcada como concluída` : `Tarefa marcada como inconcluída`,
    });
    next();
});
router.delete('/:id', async (req, res, next) => {
    const tarefas = await buscarTarefas();
    const { id } = req.params;
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== Number(id));
    if (novasTarefas.length !== tarefas.length) {
        await salvarTarefas(novasTarefas);
        res.status(201).json({
            mensagem: `Tarefa com ${id} removida`,
            tarefas: novasTarefas
        });
    }
    else {
        return next(new Error("Tarefa não encontrada"));
    }
    next();
});
export default router;
//# sourceMappingURL=tarefas.js.map