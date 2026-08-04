function ultimoElemento<T>(arr: T[]): T {
    const ultimo: T | undefined = arr[arr.length - 1];
    if (typeof ultimo === 'undefined') throw new Error("Array vazio");
    return ultimo;
}

function par<T, U>(primeiro: T, segundo: U): [T, U] {
    return [primeiro, segundo];
}

console.log(ultimoElemento([1, 2, 3]));
console.log(ultimoElemento(["a", "b", "c"]));

console.log(par(1, "um"));
console.log(par(true, 42));



