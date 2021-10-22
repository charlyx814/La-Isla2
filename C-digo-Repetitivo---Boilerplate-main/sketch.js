const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var gameState = 0;
var playerCount;
var allPlayers;
//var distance = 0;
var database;
var form, player, game;
var engine, world;
var database;
var Personajeprincipal1;
var MapaAntartida;
var MapaDesierto;
var MapaBosqueTropical;
var Ground1;

function setup() {
  createCanvas(1700,925);
  database = firebase.database();
  engine = Engine.create();
    world = engine.world;
    game = new Game();
    game.getState();
    game.start();
  //Personajeprincipal1 = new Default_PC(400, 200, 50, 50);
  Ground1 = new Ground(800,925,1700,20);
}

function draw() {
   //Cambiar por una imagen//
  background("black");
  Engine.update(engine);
  drawSprites();
  //Personajeprincipal1.display();
  Ground1.display();
  if(playerCount === 4){
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