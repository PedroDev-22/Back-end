interface Pessoa {
    nome: string,
    idade: number
};

interface Desenvolvedor extends Pessoa {
    linguagens: string[],
    nivel: "Junior" | "Pleno" | "Senior";
}

let dev: Desenvolvedor = {
    nome: "João",
    idade: 22,
    linguagens: ['Java', 'Ruby', 'Elixir'],
    nivel: "Pleno"
}

const apresentarDev = (dev: Desenvolvedor) => {
    return (
        `${dev.nome}, ${dev.idade}, anos, desenvolvedor nivel ${dev.nivel}. 
        Tecnologias: ${dev.linguagens.join(", ")}`
    );
};

console.log(apresentarDev(dev));

