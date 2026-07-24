"use strict";
function formatar(value) {
    if (typeof value === 'string') {
        return `${value.toUpperCase()}`;
    }
    else if (typeof value === 'number') {
        return `${value.toFixed(2)}`;
    }
    return value ? "SIM" : "NÃO";
}
console.log(formatar('ola'));
console.log(formatar(3.14159));
console.log(formatar(false));
