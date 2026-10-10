import fs from "node:fs";
import readLine from "node:readline";


async function processarArquivo() {
    const fileStream = fs.createReadStream('./desafios/desafio02/servidor.log', {encoding: "utf-8"})
    const writeStream = fs.createWriteStream('./desafios/desafio02/erros-criticos.txt');

    const rl = readLine.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    rl.on('line', (linha) => {
        if (linha.includes("[ERRO]")) {
            writeStream.write(linha + '\n');
        }
    })

    rl.on('close', () => {
        console.log("Processamento finalizado");

        writeStream.end();
    })
    
}

processarArquivo();