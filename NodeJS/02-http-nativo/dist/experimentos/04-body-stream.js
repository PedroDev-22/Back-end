import http from 'node:http';
const server = http.createServer((request, response) => {
    const { method, url } = request;
    if (url === '/vendas' && method === 'POST') {
        const chunks = [];
        request.on('data', (chunk) => {
            chunks.push(chunk);
        });
        request.on('end', () => {
            const bufferUnico = Buffer.concat(chunks).toString();
            const body = JSON.parse(bufferUnico);
            console.log("Corpo recebido", body);
            response.writeHead(201, { "content-type": "applications/json" });
            response.end(JSON.stringify({
                message: "Venda recebida!",
                dados: body,
            }));
        });
    }
    else {
        response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
        response.end("Não encontrado");
    }
});
server.listen(3000, () => console.log("Servido rodando na porta 3000"));
//# sourceMappingURL=04-body-stream.js.map