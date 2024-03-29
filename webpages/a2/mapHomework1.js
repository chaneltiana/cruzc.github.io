//map hw1

var startX;
var startY;
var directionX;
var directionY;

var startA;
var startB;
var directionA;
var directionB;


function setup() {
    myCanvas = createCanvas(500,500);
    myCanvas.position(400, 150);
    
    startX = width/2;
    startY = width/2;
    
    directionX = 6;
    directionY = 3;
    
    startA = width/4;
    startB = width/4;
    
    directionA = 4;
    directionB = 1;
}


function draw () {
    
    color = map(mouseX,0,width,0,255);
    background(color,150,90);

    startX = startX + directionX;
    startY = startY + directionY;
    
    if(startX > (width)) {
        directionX = -directionX;
    }
    
    if (startY > (height)) {
        directionY = -directionY;
    }
    
    if (startX < (0)) {
        directionX = -directionX;
    }
    if (startY < (0)) {
        directionY = -directionY;
    }
   
    push();
    translate(200,0);
    
    stroke(200);
    strokeWeight(2);
    triangle(startX/2,startY/2,40,70,80,100);
    ellipse(startX/2,startY/2,40,40,true); 
    ellipse(startX/2+25,startY/2+25,20,20,true); 
    ellipse(startX/2+41,startY/2+41,15,15,true); 

    pop();
    
   
    startA = startA + directionA;
    startB = startB + directionB;
 
    
    if(startA > (499)) {
        directionA = -directionA;
    }
    
    if (startB > (499)) {
        directionB = -directionB;
    }
    
    if (startA < (width)) {
        directionA = -directionA;
    }
    if (startB < (height)) {
        directionB = -directionB;
    }
    
    stroke(100);
    strokeWeight(2);
    triangle(startX,startY,40,70,80,100);
    ellipse(startX,startY,60,60,true);
    ellipse(startX+35,startY+35,30,30,true);
    ellipse(startX+55,startY+55,15,15,true);  

}

var myp5 = new p5(s, 'c1');


//map hw2

var startX;
var startY;
var directionX;
var directionY;


function setup(){
    
    myCanvas = createCanvas(500,500);
    myCanvas.position(400, 600);
    
    startX = width/2;
    startY = width/2;
    
    directionX = 6;
    directionY = 3;
}


function draw() {
    
color = map(mouseX,0,width,100,250);
background(0,0,color);

color1 = map(mouseX,0,width,100,250);
fill(0,color1,0);
triangle(20,450,10,500,30,500);
triangle(50,400,40,500,60,500);
triangle(80,370,70,500,90,500);
triangle(110,470,100,500,120,500);
triangle(140,450,130,500,150,500);
triangle(170,390,160,500,180,500);
triangle(200,480,190,500,210,500);
triangle(230,370,220,500,240,500);
triangle(260,350,250,500,270,500);
triangle(290,430,280,500,300,500);
triangle(320,450,310,500,330,500);
triangle(350,480,340,500,360,500);
triangle(380,470,370,500,390,500);
triangle(410,400,400,500,420,500);
triangle(440,420,430,500,450,500);
triangle(470,360,460,500,480,500);


color2 = map(mouseX,0,width,150,200);
fill(0,0,color2);    
ellipse(50,310,15,15);
ellipse(450,350,17,17);
ellipse(380,230,10,10);
ellipse(300,400,17,17);
ellipse(200,250,13,13);
ellipse(110,450,25,25);
ellipse(150,350,20,20);
ellipse(360,460,25,25);

    
        
    startX = startX + directionX;
    startY = startY + directionY;
    
    if(startX > (450)) {
        directionX = -directionX;
    }
    
    if (startY > (480)) {
        directionY = -directionY;
    }
    
    if (startX < (40)) {
        directionX = -directionX;
    }
    if (startY < (40)) {
        directionY = -directionY;
    }
        
    
fill(255,170,100);
triangle(startX+40,startY+10,startX,startY-45,startX-30,startY-10,true); 
triangle(startX+60,startY+25,startX+60,startY-30,startX+30,startY-5,true);
    
fill(255,210,97);
ellipse(startX,startY,100,50);
    
fill(255);  
rect(startX-5,startY-10,5,10);
rect(startX+10,startY-10,5,10);
rect(startX+25,startY-10,5,10);
rect(startX-35,startY-10,20,10);
    
}

