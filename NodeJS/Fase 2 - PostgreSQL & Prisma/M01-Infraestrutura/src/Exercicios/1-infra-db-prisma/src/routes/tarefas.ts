import { Router } from "express";
import { tarefasRepository } from "../repositories/tarefas-repositories.js";
import { error } from "node:console";

const router = Router();

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

export default router;