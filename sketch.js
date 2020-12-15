var database, game, form, player;
var position;
var gameState, playerCount;
var allPlayers,gameState=0
var horse1,horse2,horses=[]
function preload(){
  h1=loadAnimation("images/ho1.0.png","images/ho1.png")
  h2=loadAnimation("images/ho4.0.png","images/ho4.png")
  track=loadImage("images/bg1.png")
}
function setup(){
  database = firebase.database();
 
  createCanvas(displayWidth,displayHeight);
  game=new Game()
  game.readGameState()
  game.startGame()

 }

function draw(){
 
  if(playerCount===2){
    game.updateGameState(1)  
  }
  if(gameState===1){
    //clear()
    game.play()
  }
  if(gameState===2){
  game.end()
  }
    //drawSprites();
  
}


