import http from 'node:http';
const server = http.createServer((request, response) => {
    console.log(`Recebi uma chamada em ${request.url}`);
    if (request.url === '/') {
        response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
        response.end("Bem-vindo à home!");
    }
    else if (request.url === '/vendas') {
        const vendas = [
            { id: 1, produto: 'Teclado', valor: 200 },
            { id: 2, produto: 'Mouse', valor: 100 },
        ];
        response.writeHead(200, { "content-type": "application/json" });
        response.end(JSON.stringify(vendas));
    }
    else {
        response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
        response.end("Página não encontrada");
    }
});
const PORT = 2000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//# sourceMappingURL=02-routes.js.map