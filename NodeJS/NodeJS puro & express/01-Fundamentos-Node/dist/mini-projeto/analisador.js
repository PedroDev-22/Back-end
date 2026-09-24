import { createReadStream } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { stringify } from 'node:querystring';
import readline from 'node:readline';
import { json } from 'node:stream/consumers';
let totalVendas = 0;
let produtoMaisCaro = { nome: '', valor: 0 };
const analisar = async () => {
    const readStream = createReadStream('./mini-projeto/dados.csv');
    const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity,
    });
    rl.on('line', (linha) => {
        if (!linha.includes("id")) {
            const dados = linha.split(",");
            const produto = {
                id: parseInt(dados[0]),
                nome: dados[1],
                preco: parseInt(dados[2]),
                categoria: dados[3]
            };
            if (produto.preco > produtoMaisCaro.valor) {
                produtoMaisCaro.nome = produto.nome;
                produtoMaisCaro.valor = produto.preco;
            }
            totalVendas += produto.preco;
        }
    });
    rl.on('close', () => {
        const dados = [totalVendas, produtoMaisCaro];
        const dadosJson = JSON.stringify(dados);
        writeFile('./relatorio.json', dadosJson, 'utf-8');
    });
};
// Add evento close, salvar resultado no relatorio.json usando writeFile
analisar();
//# sourceMappingURL=analisador.js.map