////////////////////////////
//CSMA 101                //
//Intro to Programming    //
//Fall 19                 //
//Professor Theohar       //
//Chanel Tiana Cruz       //
//510-313-3992            //
////////////////////////////

var img1;
var img2;
var totalRect;
var x,y;
var desiredColor;
var c;

let angle = 0.0;

function preload() {
    img1 = loadImage ("data/eye.jpg");
    img2 = loadImage ("data/babyeye.jpeg");
    
}

function setup() {
    
    createCanvas(570,570);
    background(0);
    
    //loading image data
    img1.loadPixels();
    img2.loadPixels();
    
    //initialize values
    totalRect = 50;
    x = 0;
    c= 1;   
    
}

function draw () {
    
    //set circle size based of totalCircles
    var rectSize = width/totalRect
    
    //draw circles;
    var currentRect = 0;
    
    //this keeps the size proportional to your width
    while(currentRect < totalRect) {
        y = currentRect * rectSize;
    
    //get color        
    var desiredColor1 = getColor1();
    var desiredColor2 = getColor2();
    
    if (c > 0) {
        
        fill(desiredColor1);
    }
    
    if(c < 0){
        
        fill(desiredColor2);
    }
    
    rect(x,y,rectSize,rectSize);
    currentRect++;
    
    }
    
    //move down a row
    x = x + rectSize;
    
    //start over at top
    if(x > 700) {
        totalRect = random(75,100);
        c =-c;
        x = 0;
    }
  
    
}

////////////////////
function getColor1() {
    var desiredColor1 = img1.get(floor(x),floor(y));
    return desiredColor1;
    
}

function getColor2() {
    var desiredColor2 = img2.get(floor(x),floor(y));
    return desiredColor2;
    
}
