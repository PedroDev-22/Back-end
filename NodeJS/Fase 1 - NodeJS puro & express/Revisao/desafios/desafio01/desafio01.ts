import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json())

const middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('Requisição iniciada');
    console.log(`Método HTTP: ${req.url} | URL: ${req.url} | Timestamp: ${new Date().toISOString()}`);
    next();
}

app.use(middleware);

app.use((req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['x-api-key']
    if (header === '12345') {
        next();
    } else {
        res.status(401).json({
            mensagem: "Requisição não autorizada"
        })
    }
});

app.post('/dados', (req: Request, res: Response, next: NextFunction) => {
    const dados = req.body;

    if (dados.idade < 18) {
        next(new Error("Menor de idade não é permitido"))
    } else {
        res.status(200).json({
            mensagem: `Seja bem-vindo ${dados.nome}`
        })
    }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({
        mensagem: "Você não está autorizado a fazer essa requisição",
        motivo: err.message
    })
});


app.listen(3000, () => console.log("Server rodando na porta 3000"));