import fs from 'fs';
import { writeFile, readFile } from 'node:fs/promises';
const content = "Conteúdo de teste para entender o sistema de arquivos";
const filePath = './teste.txt';
async function runExperiment() {
    console.log("1. Iniciando escrita de arquivo...");
    await writeFile(filePath, content);
    console.log("2. Arquivo escrito com sucesso");
    console.log("3. Iniciando leitura síncrona (Bloqueante)...");
    const dataSync = fs.readFileSync(filePath, 'utf-8');
    console.log("4. Leitura Síncrona concluída:", dataSync);
    console.log("5. Iniciando leitura assíncrona (Não bloqueante)...");
    const dataAsync = await readFile(filePath, 'utf-8');
    console.log("6. Leitura Assíncrona concluida:", dataAsync);
}
;
runExperiment();
//# sourceMappingURL=02-fs-benchmark.js.map