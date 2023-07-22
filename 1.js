function preload(){
    Img=loadImage("1.webp");
}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
}

function draw(){
    image(Img,0,0,400,300 );
    fill("white");
    text("Mobile",105,95);
    noFill();
    stroke("red");
    rect(100,40,160,230);

}