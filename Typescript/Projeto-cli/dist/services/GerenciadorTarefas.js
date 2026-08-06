// Lógica de negócio
export default class GerenciadorTarefas {
    tarefas;
    proximoId;
    constructor(tasks = []) {
        this.tarefas = tasks;
        this.proximoId = 1;
    }
    adicionar(titulo, descricao) {
        const novaTarefa = {
            id: this.proximoId,
            titulo,
            descricao,
            concluida: false,
            criadaEm: new Date(),
        };
        this.proximoId++;
        this.tarefas.push(novaTarefa);
        return novaTarefa;
    }
    listar() {
        return [...this.tarefas];
    }
    concluir(id) {
        const tarefa = this.buscarPorId(id);
        if (tarefa) {
            tarefa.concluida = true;
            return true;
        }
        return false;
    }
    remover(id) {
        const tarefasIniciais = this.tarefas.length;
        this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
        return tarefasIniciais !== this.tarefas.length;
    }
    removerTodasTarefas() {
        this.tarefas = [];
        return true;
    }
    buscarPorId(id) {
        return this.tarefas.find((tarefa) => tarefa.id === id);
    }
}
