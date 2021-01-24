var backG, backgroundImg;
var cat, catImg, mouse, mouseImg;

function preload() {
    //load the images here
    backgroundImg = loadImage("/images/garden.png");

    catImg1 = loadImage("/images/tomOne.png");
    catImg2 = loadImage("/images/tomTwo.png");
    catImg3 = loadImage("/images/tomThree.png");
    catImg4 = loadImage("/images/tomFour.png");

    mouseImg1 = loadImage("/images/jerryOne.png");
    mouseImg2 = loadImage("/images/jerryTwo.png");
    mouseImg3 = loadImage("/images/jerryThree.png");
    mouseImg4 = loadImage("/images/jerryFour.png");
}

function setup(){
    createCanvas(980,700);
    //create tom and jerry sprites here
    backG = createSprite(490, 350);
    backG.addImage(backgroundImg);

    cat = createSprite(800, 600);
    cat.addAnimation("catStart", catImg1);
    cat.changeAnimation("catStart");
    cat.scale=0.1;

    cat.debug=true;

    mouse = createSprite(100, 600);
    mouse.addAnimation("mouseStart", mouseImg1);
    mouse.changeAnimation("mouseStart");
    mouse.scale=0.1;

    mouse.debug=true;
}

function draw() {
    background(0);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x-mouse.x<(cat.width+mouse.width)/2) {

        cat.velocityX=0;
        cat.addAnimation("catLastImg", catImg4);
        cat.changeAnimation("catLastImg");

        mouse.addAnimation("mouseLastImg", mouseImg4);
        mouse.changeAnimation("mouseLastImg");
    } else if (cat.x===800) {
        cat.changeAnimation("catStart");
        mouse.changeAnimation("mouseStart");
    }

    drawSprites();

}

function keyPressed(){
    //For moving and changing animation write code here
    if (keyCode===LEFT_ARROW) {
        cat.velocityX=-5;
        cat.addAnimation("catRunning", catImg2, catImg3);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouse", mouseImg2, mouseImg3);
        mouse.changeAnimation("mouse");
    }
}