import { createReadStream } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import readline from 'node:readline';
const analisar = async () => {
    const readStream = createReadStream('./mini-projeto/dados.csv');
    const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity,
    });
    let totalVendas = 0;
    let produtoMaisCaro = { nome: '', valor: 0 };
    rl.on('line', (linha) => {
        if (!linha.includes("id")) {
            const dados = linha.split(",");
            const preco = parseFloat(dados[2]);
            totalVendas += preco;
            console.log(totalVendas);
        }
    });
};
analisar();
//# sourceMappingURL=analisador.js.map