var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var player1, player2, players;

var ball;

var track, car1_img, car2_img, car3_img, car4_img;

function preLoad(){
    player1Img = loadImage("./images/player-removebg-preview-removebg-preview.png")
    player2Img = loadImage("./images/player2-removebg-preview.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
