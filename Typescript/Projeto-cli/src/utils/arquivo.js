// Ler / salvar JSON
export function salvarTarefas(tarefas, caminho) {
    const tarefasSalvas = [...tarefas];
    localStorage.setItem("tasks", JSON.stringify(tarefasSalvas));
}
export function carregarTarefas(caminho) {
    const jsonTasks = localStorage.getItem("tasks");
    if (jsonTasks) {
        const tarefaSalvas = JSON.parse(jsonTasks);
        return tarefaSalvas;
    }
    return [];
}
