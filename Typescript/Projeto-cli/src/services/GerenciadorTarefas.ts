// Lógica de negócio

import { Tarefa } from "../models/Tarefa.js";
import { salvarTarefas, carregarTarefas } from '../utils/arquivo.js'

export default class GerenciadorTarefas {
    private tarefas: Tarefa[];
    private proximoId: number;

    constructor() {
        this.tarefas = [];
        this.proximoId = 1;
    }


    adicionar(titulo: string, descricao: string): Tarefa {
        const novaTarefa: Tarefa = {
            id: this.proximoId,
            titulo,
            descricao,
            concluida: false,
            criadaEm: new Date(),
        }
        this.proximoId++;
        this.tarefas.push(novaTarefa);
        return novaTarefa;
    }

    listar(): Tarefa[] {
        return [...this.tarefas];
    }

    concluir(id: number): boolean {
        const tarefa = this.buscarPorId(id);
        if (tarefa) {
            tarefa.concluida = true;
            return true;
        }
        return false;
    }

    remover(id: number): boolean {
        const tarefasIniciais = this.tarefas.length;
        this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
        return tarefasIniciais !== this.tarefas.length;
    }

    buscarPorId(id: number): Tarefa | undefined {
        return this.tarefas.find((tarefa) => tarefa.id === id);
    }
}

const tasks = new GerenciadorTarefas();
tasks.adicionar("teste", "teste para adicionar");
tasks.adicionar("teste2", "teste 2 para adicionar");

salvarTarefas(tasks.listar(), "./tarefas.json");

const tarefas = carregarTarefas('./tarefas.json');
console.log(tarefas);