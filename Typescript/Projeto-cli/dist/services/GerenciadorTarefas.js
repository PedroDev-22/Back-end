// Lógica de negócio
export default class GerenciadorTarefas {
    tarefas;
    _proximoId;
    constructor(tasks = []) {
        this.tarefas = tasks;
        this._proximoId = 1;
    }
    set proximoId(novoValor) {
        this._proximoId = novoValor;
    }
    adicionar(titulo, descricao) {
        const novaTarefa = {
            id: this._proximoId,
            titulo,
            descricao,
            concluida: false,
            criadaEm: new Date(),
        };
        this._proximoId++;
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
