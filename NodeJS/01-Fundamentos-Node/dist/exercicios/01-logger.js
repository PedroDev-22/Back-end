import { appendFile } from 'node:fs/promises';
const path = './exercicios/logger.txt';
async function logger() {
    try {
        const data = new Date().toISOString();
        const content = `${data} O usuário acessou o sistema`;
        await appendFile(path, content + '\n', 'utf-8');
        console.log("Função concluida");
    }
    catch (erro) {
        console.log(`Houve um erro no logger: ${erro}`);
    }
}
logger();
//# sourceMappingURL=01-logger.js.map