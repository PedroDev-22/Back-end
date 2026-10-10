import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises'


async function conversor() {
    try {
        const file = await readFile("./exercicios/conversor/precos.txt", "utf-8");
        const numeros: string[] = file.split('\n');
        const numerosDolar: number[] = numeros.map((numero) => parseFloat(numero) * 5.50);
        let dados: string = "";

        for (let pos = 0; pos < numerosDolar.length; pos++) {
            dados += `${numerosDolar[pos]}\n`
        }
        await writeFile('./exercicios/conversor/precos-brl.txt', dados, { encoding: "utf-8" })


    } catch (erro) {
        console.log("Houve um erro:", erro);
    }
}

conversor();
