class Vida {
    constructor(total, inicial) {
        this.total = total;
        this.inicial = inicial;
        this.vidas = this.inicial;
        this.xInicial = 20;
        this.yInicial = 20;
        this.largura = 25;
        this.altura = 25;
    }

    draw() {
        for (let i = 0; i < this.vidas; i++) {
            const margem = i * 10;
            const posicao = this.xInicial * (1 + i);
            image(imagemVida, posicao + margem, this.yInicial, this.largura, this.altura);
        }
    }

    ganhaVida() {
        if (this.vidas <= this.total) {
            this.vidas++;
        }
    }

    perdeVida() {
        this.vidas--;
    }
}