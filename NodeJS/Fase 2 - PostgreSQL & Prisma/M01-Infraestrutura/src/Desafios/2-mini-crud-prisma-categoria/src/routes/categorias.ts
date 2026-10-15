import { Router } from "express";
import { categoriasRepository } from '../repositories/categorias-repository.js';


const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const categorias = await categoriasRepository.buscarTodos();

        if (categorias.length === 0) {
            res.status(200).json({
                mensagem: "Ainda não existem categorias",
                categorias: []
            })
        } else {
            res.status(200).json({
                mensagem: "Categorias encontradas",
                categorias: categorias
            })
        }
    } catch (erro) {
        next(erro);
    }
})

router.get('/:id/tarefas', async (req, res, next) => {
    const id: number = Number(req.params.id);

    if (!id) return res.status(400).json({ mensagem: "Campo obrigatório não especificado" });

    // Fazer depois

})

router.post('/', async (req, res, next) => {
    try {
        const { titulo } = req.body;

        if (!titulo) {
            return res.status(400).json({ mensagem: "Titulo é obrigatório" });
        }

        const categoria = await categoriasRepository.criar(titulo);

        res.status(201).json({
            mensagem: "Categoria criada",
            categoria: categoria
        })
    } catch (error) {
        next(error)
    }
})

router.put('/', async (req, res, next) => {
    try {
        const { titulo, id } = req.body;

        if (!titulo || !id) {
            return res.status(400).json({ mensagem: "Campo(s) obrigatório(s) não preenchido(s)" });
        };

        const categoria = await categoriasRepository.atualizar(titulo, id);

        if (categoria === null) {
            return res.status(404).json({ mensagem: "Categoria não encontrada" });
        }
        res.status(200).json({
            mensagem: "Titulo da categoria atualizado",
            titulo: categoria.titulo
        })

    } catch (error) {
        next(error);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id: number = Number(req.params.id);

        if (!id) return res.status(400).json({ mensagem: "Campo obrigatório não especificado" });

        const categoria = await categoriasRepository.deletar(id);

        if (categoria) {
            res.status(200).json({
                mensagem: `Categoria "${categoria.titulo}" deletada`,
            })
        } else {
            res.status(404).json({
                mensagem: "Categoria não encontrada"
            })
        }

    } catch (error) {
        next(error)
    }
})

export default router;

// Fazer um get para /categorias/:id/tarefas (tarefas que estão com certa categoria).