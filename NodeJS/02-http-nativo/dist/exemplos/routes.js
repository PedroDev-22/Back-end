import http from 'node:http';
const server = http.createServer((request, response) => {
    console.log(`Recebi uma chamada em ${request.url}`);
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
    if (request.url === '/') {
        response.writeHead(200);
        response.end("Bem-vindo à home!");
    }
    else if (request.url === '/vendas') {
        response.end("Aqui estão os relatórios de vendas");
    }
    else {
        response.end("Página não encontrada");
        response.statusCode = 404;
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`response.writeHead(200, )Servidor rodando em http://localhost:${PORT}`);
});
//# sourceMappingURL=routes.js.map