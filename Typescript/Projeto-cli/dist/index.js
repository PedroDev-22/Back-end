// Menu / Interação
import readline from 'readline';
import GerenciadorTarefas from './services/GerenciadorTarefas.js';
import { salvarTarefas, carregarTarefas } from './utils/arquivo.js';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Flags
let mostrarOpcoes = true;
let tarefasCarregadas = false;
// Carregando tarefas
console.log("Carregando tarefas salvas. Espere um momento...");
const tasksSalvas = carregarTarefas('./tarefas.json');
const gerenciador = new GerenciadorTarefas(tasksSalvas);
setTimeout(() => {
    if (gerenciador.buscarPorId(1) === undefined) {
        console.log("Nenhuma tarefa salva");
    }
    else {
        console.log("Tarefas Carregadas");
    }
    tarefasCarregadas = true;
}, 1000);
let time = 0;
tarefasCarregadas ? time = 0 : time = 1500;
// Setar proximo id
let novoId = 1;
gerenciador.listar().forEach((task) => {
    if (task.id >= novoId) {
        gerenciador.proximoId = task.id + 1;
    }
});
const mostrarMenu = () => {
    if (mostrarOpcoes) {
        console.log('========================================');
        console.log("1. Adicionar tarefa");
        console.log("2. Buscar tarefa por Id");
        console.log("3. Listar tarefas");
        console.log("4. Concluir tarefa");
        console.log("5. Remover tarefa");
        console.log("6. Remover todas as tarefas");
        console.log("7. Salvar e sair");
        mostrarOpcoes = false;
    }
    rl.question("Escolha: ", (resposta) => {
        switch (resposta) {
            case '1':
                rl.question("Titulo da tarefa: ", (titulo) => {
                    rl.question("Descrição da tarefa:", (descricao) => {
                        gerenciador.adicionar(titulo, descricao);
                        console.log(`Tarefa ${titulo} adicionada`);
                        setTimeout(() => {
                            mostrarOpcoes = true;
                            mostrarMenu();
                        }, 1000);
                    });
                });
                break;
            case '2':
                rl.question("Digite o id da tarefa: ", (id) => {
                    const tarefa = gerenciador.buscarPorId(parseInt(id));
                    if (tarefa !== undefined) {
                        console.log(tarefa);
                    }
                    else {
                        console.log(`Tarefa com id ${id} não encontrada`);
                    }
                    setTimeout(() => {
                        mostrarOpcoes = true;
                        mostrarMenu();
                    }, 2000);
                });
                break;
            case '3':
                const tasks = gerenciador.listar();
                if (tasks.length !== 0) {
                    console.log(gerenciador.listar());
                }
                else {
                    console.log("Não há nenhuma tarefa ainda");
                }
                setTimeout(() => {
                    mostrarOpcoes = true;
                    mostrarMenu();
                }, 2000);
                break;
            case '4':
                rl.question("Digite o id da tarefa: ", (id) => {
                    const concluida = gerenciador.concluir(parseInt(id));
                    if (concluida) {
                        console.log("Tarefa marcada como concluida");
                    }
                    else {
                        console.log(`Tarefa com id ${id} não encontrada`);
                    }
                    setTimeout(() => {
                        mostrarOpcoes = true;
                        mostrarMenu();
                    }, 1000);
                });
                break;
            case '5':
                rl.question("Digite o id da tarefa: ", (id) => {
                    const removida = gerenciador.remover(parseInt(id));
                    if (removida) {
                        console.log(`Tarefa com id ${id} removida`);
                    }
                    else {
                        console.log(`Tarefa com id ${id} não encontrada`);
                    }
                    setTimeout(() => {
                        mostrarOpcoes = true;
                        mostrarMenu();
                    }, 1000);
                });
                break;
            case '6':
                rl.question("Você tem certeza que deseja remover todas as tarefas? (s/n) ", (resposta) => {
                    if (resposta === 's') {
                        gerenciador.removerTodasTarefas();
                        console.log("Removendo tarefas...");
                        setTimeout(() => {
                            console.log("Tarefas removidas");
                            mostrarOpcoes = true;
                            mostrarMenu();
                        }, 500);
                    }
                    else if (resposta === 'n') {
                        mostrarOpcoes = true;
                        mostrarMenu();
                    }
                    else {
                        console.log("Resposta inválida");
                        setTimeout(() => {
                            mostrarOpcoes = true;
                            mostrarMenu();
                        }, 1000);
                    }
                });
                break;
            case '7':
                rl.question("Você tem certeza que deseja sair? (s/n) ", (resposta) => {
                    if (resposta === 's') {
                        console.log("Salvando...");
                        setTimeout(() => {
                            salvarTarefas(gerenciador.listar(), './tarefas.json');
                            console.log("Tarefas salvadas");
                            console.log("Saindo...");
                        }, 1000);
                        setTimeout(() => {
                            rl.close();
                        }, 1500);
                    }
                    else if (resposta === 'n') {
                        mostrarOpcoes = true;
                        mostrarMenu();
                    }
                    else {
                        console.log("Resposta inválida");
                        setTimeout(() => {
                            mostrarOpcoes = true;
                            mostrarMenu();
                        }, 1000);
                    }
                });
                break;
            default:
                mostrarMenu();
        }
    });
};
setTimeout(() => {
    mostrarMenu();
}, time);
// respondeu = true não está funcionando, apagar depois 
