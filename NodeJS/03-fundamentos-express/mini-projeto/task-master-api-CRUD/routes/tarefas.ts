import { Router, Request, Response, NextFunction } from "express";
import { readFile, writeFile } from "node:fs/promises";

const router = Router();

type Tarefa = {
    id: number;
    titulo: string;
    concluida: boolean;
}


async function buscarTarefas() {
    const file = await readFile('./mini-projeto/task-master-api-CRUD/tarefas.json', { encoding: "utf-8" })

    if (file === '') {
        return [];
    }
    return JSON.parse(file);
}

async function salvarTarefas(tarefas: Tarefa[]) {
    const isArray = Array.isArray(tarefas);
    let dadosString;
    if (isArray) {
        dadosString = JSON.stringify(tarefas);
    } else {
        dadosString = []
    }

    await writeFile('./mini-projeto/task-master-api-CRUD/tarefas.json', dadosString);
}

router.get('/', async (req, res, next) => {
    let tarefas: Tarefa[] = await buscarTarefas();

    const filtro = req.query.concluida;
    let tarefasFiltradas: Tarefa[] = [];

    if (filtro === 'true') {
        tarefasFiltradas = tarefas.filter((tarefa) => tarefa.concluida);

        if (tarefasFiltradas.length > 0) {
            res.status(200).json({
                mensagem: "Tarefas concluídas encontradas",
                tarefas: tarefasFiltradas
            })
        } else {
            res.status(200).json({
                mensagem: "Não existem tarefas concluídas",
                tarefas: []
            })
        }

    } else if (filtro === 'false') {
        tarefasFiltradas = tarefas.filter((tarefa) => !tarefa.concluida);

        if (tarefasFiltradas.length > 0) {
            res.status(200).json({
                mensagem: "Tarefas inconcluídas encontradas",
                tarefas: tarefasFiltradas
            })
        } else {
            res.status(200).json({
                mensagem: "Não existem tarefas inconcluídas",
                tarefas: []
            })
        }
    } else {
        tarefasFiltradas = tarefas;

        if (tarefasFiltradas.length > 0) {
            res.status(200).json({
                mensagem: "Tarefas encontradas",
                tarefas: tarefasFiltradas
            })
        } else {
            res.status(200).json({
                mensagem: "Não existem tarefas",
                tarefas: []
            })
        }
    }

    next();
});

router.post('/', async (req, res, next) => {

    const tarefas: Tarefa[] = await buscarTarefas();

    let maiorId = 0;
    tarefas.forEach(tarefa => {
        if (tarefa.id > Number(maiorId)) {
            maiorId = tarefa.id
        }
    })
    maiorId++;

    const tarefa = req.body;
    tarefa.id = maiorId;
    const tarefaAdd: Tarefa = tarefa;

    if (tarefaAdd.id === maiorId) {
        tarefas.push(tarefaAdd);
    }

    await salvarTarefas(tarefas);
    res.status(201).json({
        mensagem: "Tarefa Criada",
        tarefa: tarefas
    })

    next();
});

router.put('/:id', async (req, res, next) => {
    const tarefas: Tarefa[] = await buscarTarefas();
    const id = req.params.id;

    let concluida: boolean = false;
    let modificado: boolean = false

    tarefas.forEach(tarefa => {
        if (tarefa.id === Number(id)) {
            tarefa.concluida = !tarefa.concluida;
            concluida = tarefa.concluida
            modificado = true;
        }
    })

    if (!modificado) {
        return next(new Error("Tarefa não encontrada"));
    }

    await salvarTarefas(tarefas);
    res.status(200).json({
        mensagem: concluida ? `Tarefa marcada como concluída` : `Tarefa marcada como inconcluída`,
    })

    next();
})

router.delete('/:id', async (req, res, next) => {
    const tarefas: Tarefa[] = await buscarTarefas();
    const { id } = req.params;

    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== Number(id));

    if (novasTarefas.length !== tarefas.length) {
        await salvarTarefas(novasTarefas);
        res.status(201).json({
            mensagem: `Tarefa com id ${id} removida`,
            tarefas: novasTarefas
        })
    } else {
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