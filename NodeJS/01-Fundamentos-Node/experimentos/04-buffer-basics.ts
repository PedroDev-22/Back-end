const buf = Buffer.from("Node.js");

console.log("1. Buffer bruto (Hexadecimal):", buf);

console.log("2. Texto dentro do buffer:", buf.toString());

console.log("3. Buffer em formato JSON (Decimal/ASCII):", buf.toJSON());

// Criando um buffer vazio de 10 bytes
const manualBuf = Buffer.alloc(10);
manualBuf.write("oi");
console.log("4. Buffer normal:", manualBuf.toString());