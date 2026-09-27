import readLine from 'node:readline'
import fs from 'node:fs/promises'
import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

const middleware = ((req: Request, res: Response, next: NextFunction) => {
    console.log("Requisição iniciada");
    console.log(`Método HTTP: ${req.method} | URL: ${req.path} | TimesStamp: ${new Date().toISOString()}`)
    next();
})

app.use(middleware);

app.get('/livros', async (req: Request, res: Response, next: NextFunction) => {
    type Livro = {
        titulo: string;
        autor: string;
        ano: number
    }

    let livrosFiltrados: Livro[] = [];

    try {
        const ano = req.query.ano;
        let autor = req.query.autor;

        if (autor !== undefined) {
            autor = autor.toString()
            autor = decodeURIComponent(autor).replace(/"/g, '');
        }

        const conteudo = await fs.readFile('./mini-projeto/API-REST-de-Livros/livros.json', 'utf-8');
        const livros: Livro[] = JSON.parse(conteudo)

        livrosFiltrados = livros;

        if (autor) {
            livrosFiltrados = livrosFiltrados.filter((livro) => livro.autor === autor)
        }
        if (ano) {
            const anoNum = Number(ano);
            if (!Number.isNaN(anoNum)) {
                livrosFiltrados = livrosFiltrados.filter((livro) => livro.ano === anoNum)
            }
        }

        return res.status(200).json({
            mensagem: "Livros encontrados",
            livros: livrosFiltrados
        })

    } catch (erro) {
        return res.status(404).json({
            mensagem: "Livros não encontrados",
            livros: []
        })
    }

})

app.post('/livros', async (req: Request, res: Response, next: NextFunction) => {

    const conteudo = await fs.readFile('./mini-projeto/API-REST-de-Livros/livros.json', 'utf-8');
    const livros: Livro[] = JSON.parse(conteudo)


    type Livro = {
        titulo: string;
        autor: string;
        ano: number
    }

    const livroAdd = req.body as Livro | undefined;

    if (typeof livroAdd === 'object' &&
        livroAdd !== null &&
        Object.hasOwn(livroAdd, 'titulo') &&
        Object.hasOwn(livroAdd, 'autor') &&
        Object.hasOwn(livroAdd, 'ano')
    ) {
        livros.push(livroAdd);
        await fs.writeFile('./mini-projeto/API-REST-de-Livros/livros.json', JSON.stringify(livros, null, 2), 'utf-8')
        res.status(201).json(JSON.stringify({ mensagem: "Livro adicionado", livros: livroAdd }))
    } else {
        next(new Error("Falta um campo obrigatório"));
    }
})

app.delete('/livros/:id', (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
})

app.listen(3000, () => console.log("Server iniciado na porta 3000"));


// To do:
// Testar se post adiciona o livro
// Fazer delete
// Fazer a rota de erros


// Erros para tratar:
// Linha 81 - Falta um campo obrigatório em adicionar livro