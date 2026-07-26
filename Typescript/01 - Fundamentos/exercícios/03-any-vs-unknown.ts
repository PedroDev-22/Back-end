let dadoSujo: any = 3;
dadoSujo = 'Três';
dadoSujo = false;

let dadoLimpo: unknown = 4;
dadoLimpo = 'Quatro';
dadoLimpo = true;

console.log(dadoSujo.toUpperCase());
// console.log(dadoLimpo.toUpperCase()); // mostra mensagem que dadoLimpo é unknown 

if (typeof dadoLimpo === 'string') {
    console.log(dadoLimpo.toUpperCase());
}

if (typeof dadoLimpo === 'number') {
    console.log(dadoLimpo ** 2);
}

if (typeof dadoLimpo === 'boolean') {
    console.log(!dadoLimpo)
}

/* Formas de usar unknown:


// Verificação de tipo (type guard)
if (typeof dadoLimpo === 'string') {
  console.log(dadoLimpo.toUpperCase()); 
}

// Type asertion
console.log((dadoLimpo as string).toUpperCase());  
// Prefira type of quando possível. as é perigoso se errar o tipo
*/