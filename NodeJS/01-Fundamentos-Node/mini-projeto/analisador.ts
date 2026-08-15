import { createReadStream } from 'node:fs';
import { writeFile } from 'node:fs/promises'
import readline from 'node:readline';

type ProdutoCaro = {
    nome: string;
    valor: number;
}

let totalVendas: number = 0;
let produtoMaisCaro: ProdutoCaro = { nome: '', valor: 0 };

const analisar = async () => {
    const readStream = createReadStream('./mini-projeto/dados.csv');

    const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity,
    });

    type Produto = {
        id: number;
        nome: string;
        preco: number;
        categoria: string;
    }

    let primeiraLinha = true;

    rl.on('line', (linha: string) => {
        if (primeiraLinha) {
            primeiraLinha = false;
            return;
        }
        const dados: string[] = linha.split(",");
        const produto: Produto = {
            id: parseInt(dados[0]!),
            nome: dados[1]!,
            preco: parseFloat(dados[2]!),
            categoria: dados[3]!
        }
        if (produto.preco > produtoMaisCaro.valor) {
            produtoMaisCaro.nome = produto.nome;
            produtoMaisCaro.valor = produto.preco;
        }
        totalVendas += produto.preco;
    })

    rl.on('close', () => {
        const dados = [totalVendas, produtoMaisCaro];
        const dadosJson = JSON.stringify(dados);
        writeFile('./mini-projeot/relatorio.json', dadosJson, 'utf-8');
    })
}

analisar();