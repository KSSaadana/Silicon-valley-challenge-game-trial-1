var gameState="serve";
var garbage1, garbage2, garbage3, garbage4, g1Img, g2Img, g3Img, g4Img, garbageGroup1, garbageGroup2, garbageGroup3, garbageGroup4;
var ground;
var w1, w2, w3, w4, w5, w6, w7, w8, w9;
var o1, o2, o3, o4;
var score=0;

//To load all the images
function preload(){
  g1Img= loadImage("paperImg.png");
  g2Img= loadImage("plastic-bag.png");
  g3Img= loadImage("glass.png");
  g4Img= loadImage("metal.png");
}
//To create sprites objects and groups
function setup(){
  createCanvas(900,650);

w1=createSprite(10,500,15,200);
w2=createSprite(117.5,600,230,15);
w2.shapeColor="blue";
w3=createSprite(230,500,15,200);
w4=createSprite(340,600,220,15);
w4.shapeColor="yellow";
w5=createSprite(450,500,15,200);
w6=createSprite(560,600,220,15);
w6.shapeColor="green";
w7=createSprite(670,500,15,200);
w8=createSprite(782.5,600,230,15);
w8.shapeColor="red";
w9=createSprite(890,500,15,200);
o1=createSprite(117.5, 400, 230, 15);
o1.shapeColor="blue";
o2=createSprite(340, 400, 230, 15);
o2.shapeColor="yellow";
o3=createSprite(560, 400, 230, 15);
o3.shapeColor="green";
o4=createSprite(782.5, 400, 230, 15);
o4.shapeColor="red";
garbageGroup1= new Group();
garbageGroup2= new Group();
garbageGroup3= new Group();
garbageGroup4= new Group();
}

function draw(){
  background("white");
  edges=createEdgeSprites();

if(gameState==="serve"){
  textSize(23);
  text("Hello there,",50,100);
  textSize(17);
  text("Hope this game finds you well. This game will make you more responsible.",50,130);
  text("You might wonder how do we do that. We are going to see ways how to reduce landfills.",50,155);
  text("You might know that the pollution levels are increasing.",50,180);
  text("If we are able to reduce the amount of waste going to landfills we will be able to succeed on this issue.",50,205);
  text("Now, we will see the instructions. There are 2 levels",50, 230);
  text("1st level: You have to segregate the waste with the 4 basic segregation(Paper, plastic, glass and metal)",50,255);
  text("2nd level: You have to segregate plastic with '7 plastic no. segregation method'.", 50, 280);
  text("Let's start! Click on 'space' to start the game.",50,305);
}
if(keyDown("space")){
  gameState="play";
}

if(gameState==="play"){

  

//To create garbage
if (frameCount % 300 === 0) {
  garbage1 = createSprite(random(0, 100),random(50, 300) , 0, 100, 100);
  garbage1.velocityX = 3;
garbage1.addImage(g1Img)
garbage1.scale=0.5;

  garbageGroup1.add(garbage1);

  
}

//To create garbage
if (frameCount % 300 === 0) {
  garbage2 = createSprite(random(0, 100),random(50, 300) , 0, 100, 100);
  garbage2.velocityX = 3;
garbage2.addImage(g2Img);
garbage2.scale=0.2;

  garbageGroup1.add(garbage2);

  
}

//To create garbage
if (frameCount % 300 === 0) {
  garbage3 = createSprite(random(0, 100),random(50, 300) , 0, 100, 100);
  garbage3.velocityX = 3;
   garbage3.addImage(g3Img);
      garbage3.scale=0.2;

  garbageGroup3.add(garbage3);

  
}

//To create garbage
if (frameCount % 300 === 0) {
  garbage4 = createSprite(random(0, 100),random(50, 300) , 0, 100, 100);
  garbage4.velocityX = 3;
 garbage4.addImage(g4Img);
garbage4.scale=0.2;

  garbageGroup1.add(garbage4);

  
}
textSize(20);
text("Paper", 90,630);
text("Plastic", 310,630);
text("Glass", 540,630);
text("Metal", 770,630);

if(mousePressedOver(garbage1)){
garbage1.velocityX=0;
garbage1.velocityY=3;
}
if(mousePressedOver(garbage2)){
  garbage2.velocityX=0;
  garbage2.velocityY=3;
  }
  if(mousePressedOver(garbage3)){
    garbage3.velocityX=0;
    garbage3.velocityY=3;
    }
    if(mousePressedOver(garbage4)){
      garbage4.velocityX=0;
      garbage4.velocityY=3;
      }
      if(mousePressedOver(garbage1) && garbage1.x>0 && garbage1.x<225){
        o1.width=15;
        o1.height=230;
        o1.x=230;
        score+=1;
        text("Paper disposed properly.", width-580, 45);
      }

      if(mousePressedOver(garbage2) && garbage2.x>225 && garbage2.x<445){
        o2.width=15;
        o2.height=230;
        o2.x=450;
        score+=1;
        text("Plastic disposed properly.", width-580, 65);
      }

      if(mousePressedOver(garbage3) && garbage3.x>445 && garbage3.x<665){
        o3.width=15;
        o3.height=230;
        o3.x=670;
        score+=1;
        text("Glass disposed properly.", width-580, 85);
      }

      if(mousePressedOver(garbage4) && garbage4.x>665 && garbage4.x<900){
        o4.width=15;
        o4.height=230;
        o4.x=890;
        score+=1;
        text("Metal disposed properly.", width-580, 105);
      }

if(garbageGroup1.isTouching(w2)){
  garbageGroup1.destroyEach();
  o1.width=230;
  o1.height=15;
  o1.x=117.5;
}
if(garbageGroup2.isTouching(w4)){
  garbageGroup2.destroyEach();
  o2.width=230;
  o2.height=15;
  o2.x=340;
}
if(garbageGroup3.isTouching(w6)){
  garbageGroup3.destroyEach();
  o3.width=230;
  o3.height=15;
  o3.x=560;
}
if(garbageGroup4.isTouching(w8)){
  garbageGroup4.destroyEach();
  o4.width=230;
  o4.height=15;
  o4.x=782.5;
}
if(garbageGroup1.isTouching(o2) || garbageGroup1.isTouching(o3) || garbageGroup1.isTouching(o4)){
  text("Paper not disposed properly.", width-580, 45);
  garbageGroup1.destroyEach();
}
if(garbageGroup2.isTouching(o1) || garbageGroup2.isTouching(o3) || garbageGroup2.isTouching(o4)){
  text("Plastic not disposed properly.", width-580, 65);
  garbageGroup2.destroyEach();
}
if(garbageGroup3.isTouching(o1) || garbageGroup1.isTouching(o2) || garbageGroup1.isTouching(o4)){
  text("Glass not disposed properly.", width-580, 85);
  garbageGroup3.destroyEach();
}
if(garbageGroup4.isTouching(o1) || garbageGroup1.isTouching(o2) || garbageGroup1.isTouching(o3)){
  text("Metal not disposed properly.", width-580, 105);
  garbageGroup4.destroyEach();
}
}
text("Score: "+score , width-680 , 45);
  drawSprites();
}

