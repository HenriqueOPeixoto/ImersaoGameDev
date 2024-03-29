// Carrega antes do setup
function preload() {
  imagemCenario = loadImage(
    'imagens/cenario/floresta.png'
  );

  fita = loadJSON(
    'fita/fita.json'
  );

  imagemPersonagem = loadImage(
    'imagens/personagem/correndo.png'
  );

  imagemVida = loadImage(
    'imagens/assets/coracao.png'
  );

  imagemInimigo = loadImage(
    'imagens/inimigos/gotinha.png'
  );

  imagemInimigoGrande = loadImage(
    'imagens/inimigos/troll.png'
  );

  imagemInimigoVoador = loadImage(
    'imagens/inimigos/gotinha-voadora.png'
  );

  imagemGameOver = loadImage(
    'imagens/assets/game-over.png'
  );

  somDoJogo = loadSound(
    'sons/trilha_jogo.mp3'
  );

  somDoPulo = loadSound(
    'sons/somPulo.mp3'
  );

  imagemTelaInicial = loadImage(
    'imagens/assets/telaInicial.png'
  );

  fonteTelaInicial = loadFont(
    'imagens/assets/fonteTelaInicial.otf'
  );
}
