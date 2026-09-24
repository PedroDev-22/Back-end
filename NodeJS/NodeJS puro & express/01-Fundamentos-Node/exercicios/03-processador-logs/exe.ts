import { createReadStream, createWriteStream } from "node:fs";
import readLine from "node:readline";


async function filtrarErros() {
    const readStream = createReadStream('./exercicios/02-gerador-de-logs/sistema.log', { encoding: 'utf-8' }
    );
    const stream = createWriteStream('./exercicios/03-processador-logs/urgente.log');

    const rl = readLine.createInterface({
        input: readStream, // Quem ele vai ler
        crlfDelay: Infinity, // Reconhece todas as quebras de linha (/r/n)
    })

    console.log("Iniciando filtragem...");

    rl.on('line', (linha) => {
        if (linha.includes("[ERRO]")) {
            stream.write(`${linha}\n`);
        }
    })

    rl.on('close', () => {
        console.log("Processamento concluido. Verifique o arquivo urgente.log para possíveis erros");
        stream.end();
    })
}

filtrarErros();