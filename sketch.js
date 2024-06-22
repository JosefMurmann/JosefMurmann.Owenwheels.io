let wheel 
 let scl

function preload(){
wheel = loadModel("assettes\wheel45.obj");

  
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("p5Canvas");
}

function draw() {
  background("#abb8c3");
 
  if(mouseX<300){scl=scl+0.05}else{scl=scl-0.05}
  if(scl>1.2){scl=1.2}
  if(scl<0.5){scl=0.5}
  sphere(200)
  push()
  strokeWeight(0.1)
  fill(40)
  translate(-windowWidth/1.6 +scl*windowWidth/2,0,-100)
  scale(scl)
  rotateY(frameCount/100)
  rotateX(frameCount/50)

  model(wheel)
  pop()
}
