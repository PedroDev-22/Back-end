import { createWriteStream } from 'node:fs';
const stream = createWriteStream('./experimentos/grande-arquivo.txt');
console.log("Iniciando escrita pesada");
for (let i = 0; i < 1e6; i++) {
    stream.write(`Linha ${i}: O Node.js é focado em perfomance de I/O\n`);
}
stream.end(() => {
    console.log("Escrita finalizada com Stream!");
});
//# sourceMappingURL=03-streams-escrita.js.map