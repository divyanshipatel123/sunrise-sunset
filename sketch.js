const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;
var timeShow = 'AM'

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(30)
    text('Time: '+hour +' ' + timeShow,100,100)
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    // write code slice the datetime
    var datetime = responseJSON.datetime;
     hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=07){
        bg = "sunrise1.png";
    
    }else if(hour >= 07 && hour <09 ){
        bg = "sunrise3.png";
    
    }else if(hour >= 09 && hour <11 ){
        bg = "sunrise4.png";

    }else if(hour >= 11 && hour <17 ){
        bg = "sunrise6.png";

    }else if(hour >= 17 && hour <19 ){
        bg = "sunset7.png";
        timeShow = 'PM'

    }else if(hour >= 19 && hour <20 ){
        bg = "sunset9.png";
        timeShow = 'PM'
        
    }else if(hour >= 20 && hour <21 ){
        bg = "sunset10.png";
        timeShow = 'PM  '

    }else{
        bg = "sunset12.png";
        timeShow = 'PM'

    }
    





    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
    
}
