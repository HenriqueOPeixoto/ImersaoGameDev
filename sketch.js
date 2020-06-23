let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

// Carrega antes do setup
function preload() {
  imagemCenario = loadImage(
    'imagens/cenario/floresta.png'
  );

  imagemPersonagem = loadImage(
    'imagens/personagem/correndo.png'
  );
  
  somDoJogo = loadSound(
    'sons/trilha_jogo.mp3'
  );
}

function setup() {
  frameRate(40);
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  somDoJogo.loop();
}

function draw() {

  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  
}
