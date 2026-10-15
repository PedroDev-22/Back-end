import { prisma } from '../lib/prisma.js';
import { tarefasRepository } from './tarefas-repository.js';

export const categoriasRepository = {
    async buscarTodos() {
        return await prisma.categoria.findMany()
    },

    async criar(titulo: string) {
        return await prisma.categoria.create({
            data: {
                titulo: titulo
            }
        })
    },

    async atualizar(tituloNovo: string, id: number) {
        const tarefa = await prisma.categoria.findUnique({ where: { id } })

        if (!tarefa) return null;

        return await prisma.categoria.update({
            where: { id },
            data: { titulo: tituloNovo }
        })
    },

    async deletar(id: number) {
        return await prisma.categoria.delete({
            where: { id }
        })
    },

    async tarefasComCategoria(id: number) {
        const categoria = await prisma.categoria.findUnique({ where: { id } })

        // return categoria.tarefa
    }
}