class Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    this.matriz = matriz;
    this.imagem = imagem; // spritesheet
    this.largura = largura; // tam do sprite na tela
    this.altura = altura; // tam do sprite na tela
    this.x = x; // Posicao na tela
    this.y = height - this.altura; // Posicao na tela
    this.larguraSprite = larguraSprite; // tam do sprite na imagem
    this.alturaSprite = alturaSprite; // tam do sprite na imagem
    
    this.frameAtual = 0;
  }
  
  exibe() {
    image(
      this.imagem,
      this.x, this.y, // onde o sprite aparece
      this.largura, this.altura, // tam da imagem
      // onde inicia o frame do mapa de sprites.
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1], 
      this.larguraSprite, this.alturaSprite // onde termina o frame do mapa
    );
    
    this.anima();
  }
  
  anima() {
    this.frameAtual++;
    
    if (this.frameAtual > this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }

}