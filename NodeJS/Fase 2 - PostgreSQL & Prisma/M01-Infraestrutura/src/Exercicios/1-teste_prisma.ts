import { prisma } from '../lib/prisma.js';

async function Tarefa() {
    const nova = await prisma.tarefa.create({
        data: {
            titulo: "Aprender Prisma",
            concluida: false
        }
    });
    console.log("Criado:", nova);
        
    const find = await prisma.tarefa.findMany();
    console.log("Listagem:",find);
};  

Tarefa();