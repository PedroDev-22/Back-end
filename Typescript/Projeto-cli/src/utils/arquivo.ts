// Ler / salvar JSON

import { Tarefa } from "../models/Tarefa.js";
import * as fs from 'fs';

export function salvarTarefas(tarefas: Tarefa[], caminho: string): void {
    const dados = JSON.stringify(tarefas, null, 2);
    fs.writeFileSync(caminho, dados, 'utf-8');
}

export function carregarTarefas(caminho: string): Tarefa[] {
    if (!fs.existsSync(caminho)) {
        return [];
    }

    const dados = fs.readFileSync(caminho, 'utf-8');
    return JSON.parse(dados) as Tarefa[];
}
