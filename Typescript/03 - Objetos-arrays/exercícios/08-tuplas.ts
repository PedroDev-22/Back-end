type Coordernada = [number, number];

const pontoA: Coordernada = [3, 4];
const pontoB: Coordernada = [0, 0];

const distanciaEntrePontos = (a: Coordernada, b: Coordernada): number => {
    return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(a[1] - b[1], 2))
}

console.log(distanciaEntrePontos(pontoA, pontoB));
