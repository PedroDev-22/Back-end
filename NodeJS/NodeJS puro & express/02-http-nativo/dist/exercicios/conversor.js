import { readFile } from 'node:fs/promises';
async function conversor() {
    const file = await readFile("./exercicios/precos.txt", "utf-8");
    const numeros = file.split('\n');
    const numerosDolar = numeros.map((numero) => parseInt(numero) * 5.50);
    const numerosFormatados = numerosDolar.map(numero => `${numero} \n`);
    console.log(numerosFormatados);
}
conversor();
//# sourceMappingURL=conversor.js.map