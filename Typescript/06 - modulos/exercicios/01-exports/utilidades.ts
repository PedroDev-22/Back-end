export function dobrar(n: number): number {
    return n * 2;
}

export function saudar(nome?: string): string {
    return `Olá, ${nome ?? "cara!"}`
}

export const VERSAO = "1.0.0";