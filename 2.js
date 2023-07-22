function preload(){
    Img=loadImage("2.jpg");
}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
}

function draw(){
    image(Img,0,0,400,300 );
    fill("white");
    text("Computer",105,75);
    noFill();
    stroke("red");
    rect(90,10,160,200);
}