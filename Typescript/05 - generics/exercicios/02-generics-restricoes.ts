interface Identificavel {
    id: number;
}

function buscarPorId<T extends Identificavel>(itens: T[], id: number): T | undefined {
    return itens.find(item => item.id === id);
}

interface users extends Identificavel {
    nome: string;
}

const usuarios: users[] = [
    { id: 1, nome: "Pedro" },
    { id: 2, nome: "Ana" }
];

console.log(buscarPorId(usuarios, 1));
console.log(buscarPorId(usuarios, 99)); 