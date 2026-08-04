// Lógica de negócio
export class GerenciadorTarefas {
    tarefas;
    proximoId;
    constructor() {
        this.tarefas = [];
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
    buscarPorId(id) {
        return this.tarefas.find((tarefa) => tarefa.id === id);
    }
}
const tasks = new GerenciadorTarefas();
tasks.adicionar("teste", "um teste de tarefa");
tasks.listar();
