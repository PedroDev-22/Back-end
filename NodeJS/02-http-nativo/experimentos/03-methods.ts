import http from 'node:http';

const server = http.createServer((request, response) => {
    const { method, url } = request;

    if (url === '/vendas') {

        if (method === 'GET') {
            response.writeHead(201, { "content-type": 'application/json' }); // 201 => criado
            return response.end(JSON.stringify({ message: "aqui estão as vendas" }));
        }

        if (method === 'POST') {
            response.writeHead(201, {"content-type": 'application/json'}); // 201 => criado
            return response.end(JSON.stringify({message: "Venda criada com sucesso"}));
        }
    }

    response.writeHead(404, {"content-type": "text/plain; charset=utf-8"});
    response.end(`Rota não encontrada`);
});

server.listen(3000, () => console.log("Servidor rodando na porta 3000"));