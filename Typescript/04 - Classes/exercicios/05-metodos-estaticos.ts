class Conversor {
    static kmParaMilhas(km: number): number {
        return km * 0.621371;
    }
    static celsiusParaFahrenheit(c: number): number {
        return (c * 9 / 5) + 32;
    }
    static realParaDolar(reais: number, cotacao: number): number {
        return reais / cotacao; 
    }
}

console.log(Conversor.kmParaMilhas(10));
console.log(Conversor.celsiusParaFahrenheit(25));
console.log(Conversor.realParaDolar(100, 5.2));