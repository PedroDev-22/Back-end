import http from 'node:http';
import { readFile, writeFile } from 'node:fs/promises'
import { rejects } from 'node:assert';

type Livro = {
    id: number;
    titulo: string;
    ano: number
}

const server = http.createServer(async (request, response) => {
    try {
        const { method, url } = request;
        const fullUrl = new URL(url!, `http://${request.headers.host}`)

        if (method === 'GET' && fullUrl.pathname === '/livros') {
            const file = await readFile('./mini-projeto/livros.json', { encoding: "utf-8" });
            const livros: Livro[] = JSON.parse(file);
            const anoRaw = fullUrl.searchParams.get('ano');
            const ano = anoRaw ? Number(anoRaw) : null;

            let listaFinal = livros;

            if (ano) {
                listaFinal = livros.filter(livro => livro.ano === ano);
            }
            response.writeHead(200, { "content-type": "application/json" });
            return response.end(JSON.stringify(listaFinal));

        } else if (method === 'POST' && fullUrl.pathname === '/livros') {
            const livrosJson = await readFile('./mini-projeto/livros.json', { encoding: "utf-8" });
            const livros: Livro[] = [...JSON.parse(livrosJson)]

            let body = '';
            request.on('data', (chunk) => body += chunk)

            request.on('end', () => {
                const livroNovo = JSON.parse(body);
                livros.push(livroNovo);

                async function promessaAsync() {
                    try {
                        await writeFile('./mini-projeto/livros.json', JSON.stringify(livros), { encoding: "utf-8" });
                    } catch (erro) {
                        console.log(erro)
                    }
                }
                promessaAsync()

                response.writeHead(201, { "content-type": "application/json" })
                response.end(JSON.stringify(livros))
            })
        }

    } catch (erro) {
        console.log(erro)
    }
})

server.listen(3000, () => console.log("Server rodando na porta 3000"));