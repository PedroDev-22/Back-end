// Menu / Interação

import readline from 'readline';
import GerenciadorTarefas from './services/GerenciadorTarefas.js';

const gerenciador = new GerenciadorTarefas();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual seu nome? ', (resposta) => {
    console.log(`Olá, ${resposta}!`);
    rl.close();
});

const mostrarMenu = () => {
    console.log("1. Adicionar tarefa")
    console.log("2. Buscar tarefa por Id")
    console.log("3. Listar tarefas")
    console.log("4. Concluir tarefa")
    console.log("5. Remover tarefa")
    console.log("6. Salvar e sair")
    rl.question("Escolha:", (resposta) => {
        switch (resposta) {
            case '1':
                rl.question("Titulo da tarefa:", (titulo: string) => {
                    rl.question("Descrição da tarefa:", (descricao: string) => {
                        gerenciador.adicionar(titulo, descricao);
                        console.log(`Tarefa ${titulo} adicionada`);
                        mostrarMenu();
                    })
                })
            case '2': 
                rl.question("Digite o id da tarefa:", (id) => {
                    const tarefa = gerenciador.buscarPorId(parseInt(id));
                    if (tarefa !== undefined) {
                        console.log(tarefa);
                    } else {
                        console.log(`Tarefa com id ${id} não encontrada`)
                    }
                    mostrarMenu();
                })
            case '3':
                console.log(gerenciador.listar());
                mostrarMenu();
            case '4':
                rl.question("Digite o id da tarefa:", (id) => {
                    const concluida = gerenciador.concluir(parseInt(id));
                    if (concluida) {
                        console.log("Tarefa marcada como concluida");
                    } else {
                        console.log(`Tarefa com id ${id} não encontrada`)
                    }
                })
            case '5': 
                rl.question("Digite o id da tarefa", (id) => {
                    const removida = gerenciador.remover(parseInt(id));
                    if (removida) {
                        console.log(`Tarefa com id ${id} removida`)
                    } else {
                        console.log(`Tarefa com id ${id} não encontrada`)
                    }
                })
            case '6':
                rl.question("Você tem certeza que deseja sair? (s/n)", (resposta) => {
                    if (resposta === 's') {
                        
                    }
                })
        }
    })
}

// Salvar tarefas sempre que muda