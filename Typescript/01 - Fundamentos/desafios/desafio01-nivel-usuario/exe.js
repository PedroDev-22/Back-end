"use strict";
let nivelUsuario = 1;
function descreverNivel(nivel) {
    if (typeof nivel === 'number') {
        return `Você está no nível ${nivel}`;
    }
    else if (typeof nivel === 'string') {
        return `Seu nível é ${nivel}`;
    }
}
console.log(descreverNivel(nivelUsuario));
nivelUsuario = 'Intermediário';
console.log(descreverNivel(nivelUsuario));
nivelUsuario = 10;
console.log(descreverNivel(nivelUsuario));
