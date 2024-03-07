export interface FormatoDeElemento {
    desenhar(): void;
    redimensionar(): void;
}

export class Circulo implements FormatoDeElemento {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    desenhar(): void {
        console.log('Desenhando um círculo com raio: ' + this.raio);
    }

    redimensionar(): void {
        console.log('Redimensionando o círculo...');
    }
}

export class Retangulo implements FormatoDeElemento {
    comprimento: number;
    altura: number;

    constructor(comprimento: number, altura: number) {
        this.comprimento = comprimento;
        this.altura = altura;
    }

    desenhar(): void {
        console.log('Desenhando um retângulo de comprimento ' + this.comprimento + ' e altura ' + this.altura);
    }

    redimensionar(): void {
        console.log('Redimensionando o retângulo...');
    }
}

