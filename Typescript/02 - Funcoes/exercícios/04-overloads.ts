function formatar(value: string): string;
function formatar(value: number): string;
function formatar(value: boolean): string;

function formatar(value: string | number | boolean) {
    if (typeof value === 'string') {
        return `${value.toUpperCase()}`;
    } else if (typeof value === 'number') {
        return `${value.toFixed(2)}`;
    }
    return value ? "SIM" : "NÃO"; 
}

console.log(formatar('ola'));
console.log(formatar(3.14159));
console.log(formatar(false));

