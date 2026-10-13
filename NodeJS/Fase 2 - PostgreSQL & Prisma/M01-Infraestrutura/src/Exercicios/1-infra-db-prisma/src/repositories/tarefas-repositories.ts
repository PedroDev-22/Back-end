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
    }
}