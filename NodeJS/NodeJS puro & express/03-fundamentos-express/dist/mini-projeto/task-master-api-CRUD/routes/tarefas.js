import { Router } from "express";
import { readFile, writeFile } from "node:fs/promises";
const router = Router();
async function buscarTarefas() {
    const file = await readFile('./mini-projeto/task-master-api-CRUD/tarefas.json', { encoding: "utf-8" });
    if (file === '') {
        return [];
    }
    const parsed = JSON.parse(file);
    return parsed.map((t) => ({
        id: Number(t.id),
        titulo: t.titulo,
        concluida: t.concluida === 'true' || t.concluida === true
    }));
}
async function salvarTarefas(tarefas) {
    const isArray = Array.isArray(tarefas);
    let dadosString;
    if (isArray) {
        const tarefasParaJson = tarefas.map(t => ({
            id: String(t.id),
            titulo: t.titulo,
            concluida: String(t.concluida)
        }));
        dadosString = JSON.stringify(tarefasParaJson);
    }
    else {
        dadosString = "[]";
    }
    await writeFile('./mini-projeto/task-master-api-CRUD/tarefas.json', dadosString);
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
    let maiorId = 0;
    tarefas.forEach(tarefa => {
        if (tarefa.id > Number(maiorId)) {
            maiorId = tarefa.id;
        }
    });
    maiorId++;
    const tarefa = req.body;
    tarefa.id = maiorId;
    const tarefaAdd = tarefa;
    if (tarefaAdd.id === maiorId) {
        tarefas.push(tarefaAdd);
    }
    await salvarTarefas(tarefas);
    res.status(201).json({
        mensagem: "Tarefa Criada",
        tarefa: tarefaAdd
    });
    next();
});
router.put('/:id', async (req, res, next) => {
    const tarefas = await buscarTarefas();
    const id = req.params.id;
    let concluida = false;
    let modificado = false;
    tarefas.forEach(tarefa => {
        if (tarefa.id === Number(id)) {
            tarefa.concluida = !tarefa.concluida;
            concluida = tarefa.concluida;
            modificado = true;
        }
    });
    if (!modificado) {
        return next(new Error("Tarefa não encontrada"));
    }
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
        res.status(200).json({
            mensagem: `Tarefa com id ${id} removida`,
            tarefas: novasTarefas
        });
    }
    else {
        return next(new Error("Tarefa não encontrada"));
    }
    next();
});
export default router;
// Erro no delete:
/* { id: '1', titulo: 'Comprar sapato novo', concluida: 'false' },
  { titulo: 'Lavar roupa', concluida: false, id: 2 } */
// Verificar com Number, toString e etc;
// Erro causado em adicionar tarefas
//# sourceMappingURL=tarefas.js.map