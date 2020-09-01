var database;
var form;
var user;
var peopleCount = 0;
var work;
var workImg;
var curbImg;
var curb;

function preload() {
     workImg = loadImage("download (1).png");
     curbImg = loadImage("download (4).png");
}

function setup(){
    createCanvas(1500,1200);
  //  var database = firebase.database();
    form = new Form;
    form.display();
    User = new UserData;
    //User.getCount();

    work = createSprite(1250,650,100,100);
    work.addImage(workImg);
    work.scale = 0.7;

    curb = createSprite(130,150,100,100);
    curb.addImage(curbImg);
    work.scale = 0.7;
}

function draw(){
    background("white");
    drawSprites();
}