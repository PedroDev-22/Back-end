function calcular(n1: number, n2: number, operacao: "somar" | "subtrair" | "multiplicar"): number;
function calcular(n1: number, n2: number, operacao: "dividir"): number | string;

function calcular(n1: number, n2: number, operacao: "somar" | "subtrair" | "multiplicar" | "dividir") {
    switch (operacao) {
        case "somar":
            return n1 + n2;
        case "subtrair":
            return n1 - n2;
        case "multiplicar":
            return n1 * n2;
        case "dividir":
            return n1 === 0 || n2 === 0 ? "Erro: Divisão por zero" : n1 / n2;
    }
}

console.log(calcular(2, 4, "multiplicar"))
console.log(calcular(1, 6, "subtrair"))
console.log(calcular(8, 2, "dividir"))
console.log(calcular(0, 4, "dividir"))