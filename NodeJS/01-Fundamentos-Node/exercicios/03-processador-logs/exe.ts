import { createReadStream, createWriteStream } from "node:fs";

const readStream = createReadStream('./exercicios/02-gerador-de-logs/sistema.log', { encoding: 'utf-8' }
);
const stream = createWriteStream('./exercicios/03-processador-logs/urgente.log');

let data = '';

readStream.on('data', (chunk: string) => {
        data += chunk;
    if (data.includes("[ERRO]")) {
        stream.write(`${data}\n`);
    }
})

