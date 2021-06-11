var canvas, Box1, Box2, Box3, Box4, ball;
var music;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(450,400);
   Box1=createSprite(50, 390, 115, 10)
   Box1.shapeColor="GREEN"
    
   Box2=createSprite(160, 390, 130, 10)
   Box2.shapeColor="RED"

   Box3=createSprite(290, 390, 130, 10)
   Box3.shapeColor="WHITE"

   Box4=createSprite(420, 390, 125, 10)
   Box4.shapeColor="YELLOW"

    ball=createSprite(225, 200, 25, 25)
    ball.shapeColor="ORANGE"
    

}

function draw() {
    background("black");
   music.play()
   
   edges = createEdgeSprites();
ball.bounceOff(edges);

if(ball.isTouching(Box1) && ball.bounceOff(Box1)){
ball.shapeColor="GREEN"
}
if(ball.isTouching(Box2) && ball.bounceOff(Box2)){
    ball.shapeColor="RED"
    }
if(ball.isTouching(Box3) && ball.bounceOff(Box3)){
        ball.shapeColor="WHITE"
        }
if(ball.isTouching(Box4) && ball.bounceOff(Box4)){
            ball.shapeColor="YELLOW"
            }


if(keyDown("space")){

    ball.velocityX=4
    ball.velocityY=6
}            


    
    

    drawSprites();
}
