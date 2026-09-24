import http from 'node:http';
const server = http.createServer((request, response) => {
    console.log(`Recebi uma chamada em: ${request.url}`);
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
    response.end("Olá! Você acabou de acessar meu servidor nativo em Node.js!");
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//# sourceMappingURL=01-server.js.map