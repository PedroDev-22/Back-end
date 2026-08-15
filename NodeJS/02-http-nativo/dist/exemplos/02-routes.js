import http from 'node:http';
const server = http.createServer((request, response) => {
    console.log(`Recebi uma chamada em ${request.url}`);
    if (request.url === '/') {
        response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
        response.end("Bem-vindo à home!");
    }
    else if (request.url === '/vendas') {
        response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
        response.end("Aqui estão os relatórios de vendas");
    }
    else {
        response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
        response.end("Página não encontrada");
        // Pergunta: response.statusCode = 404 estaria certo?
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//# sourceMappingURL=02-routes.js.map