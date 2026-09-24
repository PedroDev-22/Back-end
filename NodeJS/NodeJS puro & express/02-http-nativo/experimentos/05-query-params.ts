import http from 'node:http';

const server = http.createServer((request, response) => {
    const { method, url } = request;
    const fullUrl = new URL(url!, `http://${request.headers.host}`);

    if (fullUrl.pathname === '/precos' && method === 'GET') {

        const queryMin = fullUrl.searchParams.get('min');

        let resultado: number[] = [];
        const precos = [10, 50, 100, 200];

        if (queryMin) {
            const precoMinimo = Number(queryMin);
            resultado = precos.filter((preco) => preco >= precoMinimo);
        } else {
            resultado = precos;
        }

        response.writeHead(200, { "content-type": "application/json" })
        response.end(JSON.stringify({
            filtros: { min: queryMin },
            dados: resultado,
            total: resultado.length
        }))
    }
})

server.listen(3000, () => console.log("Servidor rodando na porta 3000"));