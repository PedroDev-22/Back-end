import http from 'http';

const server = http.createServer((req, res) => {

    const fullURL = new URL(req.url!, `http://${req.headers.host}`)
    const caminho = fullURL.pathname;

    if (req.method === 'GET' && caminho === '/produtos') {
        const parametros = Object.fromEntries(fullURL.searchParams);

        res.writeHead(200, { "content-type": "application/json" });
        function temConteudo(obj: any) {
            return obj != null && Object.keys(obj).length > 0;
        }
        if (temConteudo(parametros)) {
            res.end(JSON.stringify({ dados: parametros, mensagem: "Concluido" }));
        } else {
            res.end(JSON.stringify({ mensagem: "Inconcluido. Parametros não enviados" }));
        }


        return;
    } else {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({ mensagem: "Nada a fazer" }))
    }

})

server.listen(3000, () => console.log("Server rodando na porta 3000"));