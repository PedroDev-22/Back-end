import http from 'http';
import { readFile } from 'node:fs/promises';

type Infos = {
    moeda: string;
    valores: number[];
    total_itens: number;
}

const server = http.createServer(async (request, response) => {
    const { method, url } = request;

    if (method === 'GET' && url === '/precos') {
        try {
            const file = await readFile('./exercicios/conversor/precos-brl.txt', { encoding: "utf-8" });

            const numeros: number[] = file
                .split('\n')
                .filter(linha => linha.trim() !== "")
                .map((num) => parseFloat(num));

            const infos: Infos = {
                moeda: "BRL",
                valores: numeros,
                total_itens: numeros.length
            }

            response.writeHead(200, { "content-type": "application/json" })
            response.end(JSON.stringify(infos));
        } catch (erro: any) {
            console.error("Erro detectado:", erro);
            response.writeHead(500, { "content-type": "application/json" })
            response.end(JSON.stringify({ error: "Erro ao ler o banco de dados" }));
        }
    }
    else {
        response.writeHead(404, { "content-type": "application/json" })
        response.end(JSON.stringify({ error: "Rota não encontrada" }));
    }
})

server.listen(3000, () => console.log("Server rodando na porta 3000"))