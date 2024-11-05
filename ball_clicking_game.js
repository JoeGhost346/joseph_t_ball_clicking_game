var ballx = 300;
var bally = 300;
var ballSize = 25;
var score = 0;
var bgred = 220;
var bggreen = 220;
var bgblue = 220;


function setup() {
  createCanvas(1536, 738);
  textAlign(CENTER);
  textSize(24);
}

function draw(){
  background(bgred, bggreen, bgblue);
  
  text(("Score: " + score), width/2, 40);
  
  ellipse(ballx, bally, ballSize^2, ballSize^2);
  
  //line(ballx, bally, mouseX, mouseY);
  
  //if(score <= 4){
  // text(("Score: " + score), width/2, 40);
// }else{
  // textSize(40);
 // text(('Happy Hallows Eve'), width/2, height/2); 
 //} 
 
}

function newPlace(){
  ballx = random (width);
  bally = random (height);
  score = score + 1;
  
  if (score > 5){
    levelone();
  }
  
  if(score > 10){
   leveltwo(); 
  }
  
  if(score > 15){
    levelthree();
  }
  
  if(score > 20){
    levelfour();
  }
  
   if(score > 25){
    levelfive();
  }
  
    if(score > 30){
    levelfive();
  }
  
    if(score > 35){
    levelsix();
  }
  
    if(score > 40){
    levelseven();
  }
  
     if(score > 45){
    leveleight();
  }
  
    if(score > 50){
    levelnine();
  }
  
  if(score > 55){
    levelten();
  }
  
  
}
//green
function levelone(){
  bgred = 0;
  bgblue = 0;
  bggreen = 220;
  ballSize = 20;
}
//blue
function leveltwo(){
  bgred = 98;
  bgblue = 220;
  bggreen = 192;
  ballSize = 10;
}
//red
function levelthree(){
  bgred = 220;
  bgblue = 5;
  bggreen = 12;
  ballSize = 5;
}
//orange
function levelfour(){
  bgred = 220;
  bgblue = 0;
  bggreen = 165;
  ballSize = 3;
}
//gray
function levelfive(){
  bgred = 50;
  bgblue = 50;
  bggreen = 50;
  ballSize = 3;
}
//gray
function levelsix(){
  bgred = 40;
  bgblue = 40;
  bggreen = 40;
  ballSize = 3;
}
//gray
function levelseven(){
  bgred = 30;
  bgblue = 30;
  bggreen = 30;
  ballSize = 3;
}
//gray
function leveleight(){
  bgred = 20;
  bgblue = 20;
  bggreen = 20;
  ballSize = 3;
}
//darkgray
function levelnine(){
  bgred = 10;
  bgblue = 10;
  bggreen = 10;
  ballSize = 3;
}

function levelten(){
if(score <= 55){
   text(("Score: " + score), width/2, 40);
 }else{
   textSize(40);
  text(('You Win'), width/2, height/2); 
 } 
}


function mousePressed(){
  var disToBall = dist (ballx, bally, mouseX, mouseY);
  if(disToBall < 25){    
    newPlace();
  }
}  
