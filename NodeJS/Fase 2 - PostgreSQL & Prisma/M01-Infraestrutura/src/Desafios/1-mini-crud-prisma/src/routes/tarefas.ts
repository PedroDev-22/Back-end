import { Router } from "express";
import { tarefasRepository } from "../repositories/tarefas-repositories.js";
import { error } from "node:console";
import { nextTick } from "node:process";

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const tarefas = await tarefasRepository.buscarTodos()
        if (tarefas.length !== 0) {
            res.status(200).json({
                mensagem: "Tarefas encontradas",
                tarefas: tarefas
            })
        } else {
            res.status(200).json({
                mensagem: "Ainda não existem tarefas criadas",
                tarefas: []
            })
        }

    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { titulo } = req.body;

        if (!titulo) {
            return res.status(400).json({ mensagem: "Titulo é obrigatório" })
        }

        const tarefa = await tarefasRepository.criar(titulo);
        res.status(201).json({
            mensagem: "Tarefa criada",
            tarefa: tarefa
        })
    } catch (error) {
        next(error);
    }

})

router.put('/:id', async (req, res, next) => {
    try {
        const id: number = Number(req.params.id);

        if (!id) {
            return res.status(400).json({ mensagem: "Você precisa informar o id da tarefa" });
        }
        const tarefaAtualizada = await tarefasRepository.atualizar(id)

        if (!tarefaAtualizada) {
            return res.status(404).json({mensagem: "Tarefa não encontrada"});
        }

        res.status(200).json({
            mensagem: "Status atualizado",
            tarefa: tarefaAtualizada
        })

    } catch (error) {
        next(error);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id: number = Number(req.params.id);

        if (!id) {
            return res.status(400).json({ mensagem: "Você precisa informar o id da tarefa" });
        }

        const tarefaDeletada = await tarefasRepository.deletar(id);
        const tarefasAtualizadas = await tarefasRepository.buscarTodos();

        res.status(200).json({
            mensagem: `Tarefa com id ${id} deletada`,
            tarefas: tarefasAtualizadas
        })

    } catch (error) {
        next(error);
    }
})

export default router;