function setup() {
  frameRate(40);
  createCanvas(windowWidth, windowHeight);
  
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  
  botaoGerenciador = new BotaoGerenciador(
    'Iniciar',
    width / 2, height / 2 
  );
  jogo.setup();

  cenas = {
    jogo,
    telaInicial
  };

  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {

  cenas[cenaAtual].draw();

}
