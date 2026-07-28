"use strict";
// Funções
const emprestarLivro = (livro, usuario) => {
    if (livro.disponivel) {
        livro.disponivel = false;
        usuario.livrosEmprestados.push(livro.isbn);
        return `Livro ${livro.titulo} emprestado para ${usuario.nome}`;
    }
    else {
        return "Livro indisponível";
    }
};
const devolverLivro = (livro, usuario) => {
    if (!livro.disponivel) {
        livro.disponivel = true;
        const index = usuario.livrosEmprestados.indexOf(livro.isbn);
        if (index !== -1) {
            usuario.livrosEmprestados.splice(index, 1);
        }
        return `Livro ${livro.titulo} devolvido`;
    }
    else {
        return `Livro ${livro.titulo} já está disponivel`;
    }
};
const listarLivroDisponiveis = (livros) => {
    const disponiveis = livros.filter(livro => livro.disponivel);
    const livrosDisponiveis = disponiveis.map(disponivel => disponivel.titulo);
    return livrosDisponiveis;
};
const buscarLivro = (livros, titulo) => {
    const livroEncontrado = livros.find(livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
    return livroEncontrado;
};
// Livros
const livro1 = {
    isbn: "978-0132350884",
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    anoPublicacao: 2008,
    disponivel: true
};
const livro2 = {
    isbn: "978-0201616224",
    titulo: "O programador pragmático",
    autor: "Andrew Hunt",
    anoPublicacao: 2019,
    disponivel: false
};
const livro3 = {
    isbn: "978-0201485677",
    titulo: "Refatoração",
    autor: "Martin Fowler",
    anoPublicacao: 2018,
    disponivel: true
};
// Usuários
const usuario1 = {
    id: 1,
    nome: "Henry",
    email: "henry@gmail.com",
    livrosEmprestados: []
};
const usuario2 = {
    id: 2,
    nome: "Pedro",
    email: "pedro@gmail.com",
    livrosEmprestados: []
};
const usuario3 = {
    id: 3,
    nome: "Júnior",
    email: "junior@gmail.com",
    livrosEmprestados: []
};
console.log(emprestarLivro(livro1, usuario2));
console.log(devolverLivro(livro1, usuario2));
console.log(listarLivroDisponiveis([livro1, livro2, livro3]));
console.log(buscarLivro([livro1, livro2, livro3], "O programador pragmático"));
