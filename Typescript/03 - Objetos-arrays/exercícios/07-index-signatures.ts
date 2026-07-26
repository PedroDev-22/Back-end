type NotasAlunos = {
    [materia: string]: number;
}

const notasPedro: NotasAlunos = {
    "matematica": 8.5,
    "história": 7.0,
    "programação": 9.5
}

const mediaNotas = (notas: NotasAlunos): number  => {
    let total: number = 0
    Object.values(notas).forEach(nota => total += nota);

    const media: number | string = Number((total / Object.values(notas).length).toFixed(2));
    return media;
}

console.log(mediaNotas(notasPedro));

