import http from 'http';

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/status') {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ status: "online" }))
    }
    if (req.method === 'POST' && req.url === '/enviar') {
        const chunks: Buffer[] = [];

        req.on('data', (chunk) => {
            chunks.push(chunk);
        })

        req.on('end', () => {
            const bodyBuffer = Buffer.concat(chunks);
            const bufferString = bodyBuffer.toString();
            const bufferJson = JSON.parse(bufferString);

            res.writeHead(201, { 'content-type': "application/json" });
            res.end(JSON.stringify({ dados: bufferJson, recebido: true }));
        })
        return;
    } else {
        res.writeHead(404, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ mensagem: "Rota não encontrada" }));
    }
})

server.listen(3000, () => console.log("Server rodando na porta 3000"));
