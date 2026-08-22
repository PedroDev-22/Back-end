import express, { Request, Response, NextFunction } from 'express';

const app = express();

const validadorSenha = (req: Request, res: Response, next: NextFunction) => {
    const senha = req.query.pass;

    if (senha === "pirulito") {
        next();
    } else {
        res.status(403).send("Acesso negado");
    }
}

app.use(validadorSenha);

app.get('/segredo', (req, res) => {
    res.send('"O que é a vida sem desafios pessoais?" - Sr.Rooxie, Pokémon Black 2');
});  

app.listen(3000, () => console.log("Server rodando na porta 3000"))