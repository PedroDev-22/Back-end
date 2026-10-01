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

        type Dados = {
            ultimoId: number | null,
            livros: Livro[]
        };

        const { ultimoId, livros }: Dados = JSON.parse(conteudo);

        let livrosFiltrados = livros;

        if (autor) {
            livrosFiltrados = livrosFiltrados.filter((livro) => livro.autor === autor)
        }
        if (ano) {
            const anoNum = Number(ano);
            if (!Number.isNaN(anoNum)) {
                livrosFiltrados = livrosFiltrados.filter((livro) => livro.ano === anoNum)
            }
        }

        if (livrosFiltrados.length > 0) {
            res.status(200).json({
                mensagem: "Livro(s) encontrado(s)",
                livros: livrosFiltrados
            })
        } else {
            res.status(200).json({
                mensagem: "Livro(s) não encontrado(s)",
                livros: []
            })

        }
    } catch (erro) {
        next(erro)
    }

})

app.post('/livros', async (req: Request, res: Response, next: NextFunction) => {

    interface LivroAdd {
        titulo: string;
        autor: string;
        ano: number
    }

    interface Livro extends LivroAdd {
        id: number
    }

    const conteudo = await fs.readFile('./mini-projeto/API-REST-de-Livros/livros.json', 'utf-8');
    type Dados = {
        ultimoId: number | null,
        livros: Livro[]
    };

    let { ultimoId, livros }: Dados = JSON.parse(conteudo);

    const livroAdd = req.body;

    let maiorId: number = 1;
    let novoId: number = 0;

    if (ultimoId !== null) {
        ultimoId++
        novoId = ultimoId
    } else {
        if (livros.length > 0) {
            livros.forEach((livro) => {
                if (livro.id >= maiorId) {
                    maiorId = livro.id
                    novoId = maiorId + 1
                    ultimoId = novoId
                }
            })
        } else {
            novoId = maiorId;
            ultimoId = novoId;
        }
    }

    if (typeof livroAdd === 'object' &&
        livroAdd !== null &&
        Object.hasOwn(livroAdd, 'titulo') &&
        Object.hasOwn(livroAdd, 'autor') &&
        Object.hasOwn(livroAdd, 'ano')
    ) {
        livroAdd.id = novoId;
        const livroAdicionar: Livro = livroAdd;
        livros.push(livroAdicionar);

        const dados = { ultimoId, livros }
        await fs.writeFile('./mini-projeto/API-REST-de-Livros/livros.json', JSON.stringify(dados, null, 2), 'utf-8')
        res.status(201).json({ mensagem: `Livro ${livroAdd.titulo} adicionado`, livros: livroAdd })
    } else {
        next(new Error("Falta um campo obrigatório"));
    }
})

app.delete('/livros/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (id === undefined) {
        next(new Error("Por favor, forneça o id do livro"))
    }

    type Livro = {
        id: number
        titulo: string;
        autor: string;
        ano: number
    }

    const conteudo = await fs.readFile('./mini-projeto/API-REST-de-Livros/livros.json', 'utf-8');
    type Dados = {
        ultimoId: number | null,
        livros: Livro[]
    };


    const { ultimoId, livros }: Dados = JSON.parse(conteudo);

    const livrosFiltrados = livros.filter(livro => livro.id !== Number(id))

    let filtrou: boolean = true;

    if (livrosFiltrados.length === livros.length) {
        filtrou = false
    }

    const dados = { ultimoId, livros: livrosFiltrados }
    await fs.writeFile('./mini-projeto/API-REST-de-Livros/livros.json', JSON.stringify(dados, null, 2), 'utf-8')
    if (filtrou) {
        res.status(201).json({
            mensagem: `Livro com id ${id} removido`,
            livros: livrosFiltrados
        })
    } else {
        next(new Error("Livro com id especificado não encontrado"))
    }
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.message === "Falta um campo obrigatório") {
        res.status(422).json({
            mensagem: "Erro: Falta um campo obrigatório nos dados fornecidos"
        })
    } else if (err.message === "Livro com id especificado não encontrado") {
        res.status(404).json({
            mensagem: "Erro: Livro com id especificado não encontrado"
        })

    } else if (err.message === "Por favor, forneça o id do livro") {
        res.status(422).json({
            mensagem: "Por favor, forneça o id do livro"
        })
    } else if (err.message === "Livros(s) não encontrado(s)") {
        res.status(404).json({
            mensagem: "Livros(s) não encontrado(s)"
        })
    } else {
        res.status(500).json({
            mensagem: `Erro: ${err.message}`
        })
    }
})

app.listen(3000, () => console.log("Server iniciado na porta 3000"));