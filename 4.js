function preload(){
    Img=loadImage("4.webp");
}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
}

function draw(){
    image(Img,0,0,400,300 );
    fill("white");
    text("FCream",75,165);
    noFill();
    stroke("red");
    rect(60,110,130,110);
}