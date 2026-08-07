// Lógica de negócio

import { Tarefa } from "../models/Tarefa.js";

export default class GerenciadorTarefas {
    private tarefas: Tarefa[];
    private _proximoId: number;

    constructor(tasks: Tarefa[] = []) {
        this.tarefas = tasks;
        this._proximoId = 1;
    }

    set proximoId(novoValor: number) {
        this._proximoId = novoValor;
    }

    adicionar(titulo: string, descricao: string): Tarefa {
        const novaTarefa: Tarefa = {
            id: this._proximoId,
            titulo,
            descricao,
            concluida: false,
            criadaEm: new Date(),
        }
        this._proximoId++;
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

    removerTodasTarefas(): boolean {
        this.tarefas = [];
        return true;
    }

    buscarPorId(id: number): Tarefa | undefined {
        return this.tarefas.find((tarefa) => tarefa.id === id);
    }
}