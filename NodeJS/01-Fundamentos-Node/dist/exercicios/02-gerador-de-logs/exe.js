import { createWriteStream } from 'node:fs';
const stream = createWriteStream('./exercicios/02-gerador-de-logs/sistema.log');
for (let i = 0; i < 50000; i++) {
    const logs = ["[INFO] Sistema operando normalmente", "[AVISO] Uso de memória acima de 70%", "[ERRO] Falha ao conectar no banco de dados"];
    const logChoosen = logs[Math.floor(Math.random() * logs.length)];
    if (logChoosen !== undefined) {
        stream.write(`${logChoosen}\n`);
    }
    else {
        i--;
    }
}
stream.end(() => {
    console.log("Stream acabou");
});
//# sourceMappingURL=exe.js.map