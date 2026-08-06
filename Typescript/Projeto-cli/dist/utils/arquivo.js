// Ler / salvar JSON
import * as fs from 'fs';
export function salvarTarefas(tarefas, caminho) {
    const dados = JSON.stringify(tarefas, null, 2);
    fs.writeFileSync(caminho, dados, 'utf-8');
}
export function carregarTarefas(caminho) {
    if (!fs.existsSync(caminho)) {
        return [];
    }
    const dados = fs.readFileSync(caminho, 'utf-8');
    return JSON.parse(dados);
}
