function calcularArea(largura: number, altura: number, unidade?: string): string {
    return `Área: ${largura * altura}${unidade ?? "m²"}`;
}

console.log(calcularArea(2, 3));
console.log(calcularArea(9, 6, "cm²"));