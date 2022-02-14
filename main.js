noseX=""
noseY=""
function preload(){}
function setup(){
canvas=createCanvas(500,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on('pose',getposes)
}
function snapshot(){
save('Me_clown.png')
}
function modelloaded(){
    console.log ("modelloaded")
}
function getposes(results){
    console.log("results")
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
console.log(noseX,noseY)
}
function draw(){
    image(video,0,0,500,500)
    fill(255,10,30)
    stroke(255,30,10)
    circle(noseX,noseY,20)
    }