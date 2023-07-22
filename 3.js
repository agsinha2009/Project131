function preload(){
    Img=loadImage("3.avif");
}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
}

function draw(){
    image(Img,0,0,400,300 );
    fill("white");
    text("Fanr",75,75);
    noFill();
    stroke("red");
    rect(40,40,350,150);
}