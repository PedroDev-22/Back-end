import { prisma } from '../lib/prisma.js';

export const tarefasRepository = {
    async criar(titulo: string) {
        return await prisma.tarefa.create({
            data: {
                titulo: titulo,
                concluida: false
            }
        })
    },
    async buscarTodos() {
        return await prisma.tarefa.findMany();
    },
    async atualizar(id: number) {
        const tarefa = await prisma.tarefa.findUnique({ where: { id } });

        if (!tarefa) return null;

        return await prisma.tarefa.update({
            where: { id },
            data: { concluida: !tarefa.concluida }
        })
    },
    async deletar(id: number) {
        return await prisma.tarefa.delete({
            where: {
                id: id
            }
        })
    }
}