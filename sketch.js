//variáveis da bolinha
let xBolinha = 100;//X bolinha
let yBolinha = 200;//Y bolinha
let diametro = 20;//diametro
let raio = diametro / 2;//tamanho

//variáveis do oponente
let xRaqueteOponente = 585;//X raquete
let yRaqueteOponente = 150;//Y raquete

//velocidade da bolinha
let velocidadeXBolinha = 6;//velocidde
let velocidadeYBolinha = 6;//velocidade

//variáveis da raquete
let xRaquete = 5;//X raquete
let yRaquete = 150;//Y raquete
let raqueteComprimento = 10;//tamanho
let raqueteAltura = 90;//tamanho
//placar do jogo
let meusPontos = 0;//meus pontos 
let pontosDoOponente = 0;//pontos do oponente
//sons do jogo
let raquetada;//raquetada
let ponto;//pontos
let trilha;//trilha
let colidiu = false;//colisão
function setup() {//configuração
  createCanvas(600, 400);//tamanho cenario
    trilha.loop();//trilha loop
}
function draw() {//desenhar
    background(0);//fundo
    mostraBolinha();//mostra bolinha
    movimentaBolinha();//mecher a bolinha
    verificaColisaoBorda();//colisão a bolinha
    mostraRaquete(xRaquete, yRaquete);//visualizar raquete
    movimentaMinhaRaquete();//movimento raquete
    verificaColisaoRaquete(xRaquete, yRaquete);//colisão raquete
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);//colisão raquete
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);//mostra raquete
    movimentaRaqueteOponente();//movimento raquete oponente
    incluiPlacar() //placar
    marcaPonto();//marcar ponto
}
function mostraBolinha() {//mostra bolinha
  circle(xBolinha, yBolinha, diametro);//tamanho bolinha
}
function movimentaBolinha() {//movimento bolinha
  xBolinha += velocidadeXBolinha;//velocidade bolinha
  yBolinha += velocidadeYBolinha;//volocidade bolinha
}
function verificaColisaoBorda() {//borda
  if (xBolinha + raio > width || xBolinha - raio < 0) {//diametro bolinha
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {//comprimento bolinha
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x,y) {//mostra raquete
    rect(x, y, raqueteComprimento, raqueteAltura);//tamanho raquete
}
function movimentaMinhaRaquete() {//movimento raquete
  if(keyIsDown(UP_ARROW)) {//seta para cima
    yRaquete -= 10;//Y raquete
  }
  if(keyIsDown(DOWN_ARROW)) {//seta para baixo
    yRaquete += 10;//X raquete
  }
}
function verificaColisaoRaquete() {//veriicação da coisão
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {//função geral
    velocidadeXBolinha *= -1;//velocidade bolinha
     raquetada.play();//raquete
  }
}
function verificaColisaoRaquete(x, y) {//colisão raquete  
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);//colisão
    if (colidiu){
        velocidadeXBolinha *= -1;//velocidade da bolinha
        raquetada.play();
  }
}
function movimentaRaqueteOponente(){//raquete do oponente
    if (keyIsDown(87)){//poição da chave 
        yRaqueteOponente -= 10;//para baixo
    }
    if (keyIsDown(83)){//posição da chave 
        yRaqueteOponente += 10;//para cima
    }
}
function incluiPlacar(){//placar
  stroke(255)
    textAlign(CENTER);//texto 
    textSize(16);//texto
    fill(color(255,140, 0));//cor
    rect(150, 10, 40, 20);//coreção
    fill(255);//preenchimento
    text(meusPontos, 170, 26);//meus pontos
    fill(color(255,140, 0));//cor
    rect(450, 10, 40, 20);//coreção
    fill(255);//preencher
    text(pontosDoOponente, 470, 26);//pontos oponente
}
function marcaPonto() {//placar
    if (xBolinha > 590) {//X bolinha
        meusPontos += 1;//meus pontos
        ponto.play();//começo
    }
    if (xBolinha < 10) {//X bolinha
        pontosDoOponente += 1;//pontos do oponente
        ponto.play();//começo
    }
}
function preload(){//iniciação da trilha
  trilha = loadSound("trilha.mp3");//som do jogo
  ponto = loadSound("ponto.mp3");//som do ponto
  raquetada = loadSound("raquetada.mp3");//som da raquete
}