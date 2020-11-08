var startSprite, startPageImage;
var startSpriteImage;
var wall1,wall2;
var normalEnemy;
var player;
var gameState;
var normalSprite;
var easySprite;
var hardSprite;
var veryhardSprite;
var intenseSprite;


function preload(){
    startPageImage = loadImage('images/start page.jpg');
    startSpriteImage = loadImage('images/levels.jpg');
}

function setup(){
    createCanvas(windowWidth-50,windowHeight-50);
    gameState = "start";
    

}

function draw(){
    //console.log(easySprite);
    if(gameState === "start"){
        imageMode(CENTER);
        image(startPageImage,width/2,height/2,width,height);
        startSprite = createSprite(width/2,height/2);
        startSprite.addImage("startPage",startSpriteImage);
        easySprite = createSprite(775,248,300,50);
        easySprite.visible = false;
    }
    else if(gameState==="beginner" &&  mousePressedOver(easySprite)){
        //console.log("Hi")
        background(0,255,128);
        player = createSprite(50,100,10,10);
        normalEnemy = createSprite(50,100,10,10);
        wall1 = createSprite(100,height-250,200,40);
        wall2 = createSprite(300,height-400,50,200);
    }
    drawSprites();
}