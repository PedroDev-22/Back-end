type Habilidade = {
    nomeHab: string;
    nivel: "iniciante" | "intermediário" | "avançado";
}

type Desenvolvedor = {
    nome: string;
    experienciaAnos: number;
}

type DevComHabilidade = Habilidade & Desenvolvedor;

const meuPerfil: DevComHabilidade = {
    nomeHab: "Front-end",
    nivel: "intermediário",
    nome: "Pedro",
    experienciaAnos: 0.7
}

console.log(meuPerfil)