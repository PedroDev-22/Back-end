import { createReadStream } from 'node:fs';
import { writeFile } from 'node:fs/promises'
import readline from 'node:readline';

const analisar = async () => {
    const readStream = createReadStream('./mini-projeto/dados.csv');

    const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity,
    });

    type ProdutoCaro = {
        nome: string;
        valor: number;
    }

    let totalVendas: number = 0;
    let produtoMaisCaro: ProdutoCaro = { nome: '', valor: 0 };

    type Produto = {
        id: number;
        nome: string;
        preco: number;
        categoria: string;
    }

    rl.on('line', (linha: string) => {
        if (!linha.includes("id")) {
            const dados: string[] = linha.split(",");
            const produto: Produto = {
                id: parseInt(dados[0]!),
                nome: dados[1]!,
                preco: parseInt(dados[2]!),
                categoria: dados[3]!
            }
            if (produto.preco > produtoMaisCaro.valor) {
                produtoMaisCaro.nome = produto.nome;
                produtoMaisCaro.valor = produto.preco;
            }
            totalVendas += produto.preco;
        }
    })
}

// Add evento close, salvar resultado no relatorio.json usando writeFile

analisar();