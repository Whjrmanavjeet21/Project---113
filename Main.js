function preload(){
}
function setup(){
    canvas = createCanvas(550, 450);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,100,80,300,250);
    stroke(26, 255, 26);
    fill(26,255,26);
    rect(30, 20, 55, 55, 20);
    rect(460, 20, 55, 55, 20);
    rect(40, 360, 55, 55, 20);
    rect(460, 360, 55, 55, 20);
    stroke(17, 0, 26);
    fill(17, 0, 26);
    rect(30, 20, 55, 15, 20);
    rect(460, 15, 55, 15, 20);
    rect(15, 360, 55, 15, 20);
    rect(360, 360, 55, 15, 20);
}
function take_snapshot(){
    save("Selfie.png")
}