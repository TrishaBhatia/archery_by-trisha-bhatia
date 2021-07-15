var bg,player1,player2,arrow;
var p1,p2,arrows,player;
var sound1,sound2,sound3;
var button1,button2;
var gameState=0;
var m1,m2,m3,m4,m5,m6,m7,stone_img;
var steps,step;
var j1,j2,j3,j4,j5,j6,good1,good2,good3,good4,good5,good6;
var RbGroup,Arrow;
var life;
var live=3;
var over_img;
var count=0;
function preload()
{
  /*sound1=loadSound("click.mp3");
  sound2=loadSound("strike.mp3");
  sound3=loadSound("go.mp3");*/
  j1=loadImage("job1.png");
  j2=loadImage("job2.png");
  j3=loadImage("job3.png");
  j4=loadImage("job4.png");
	bg=loadImage("bg2.jpg");
  m1=loadImage("monster1.png");
  m2=loadImage("monster2.png");
  m3=loadImage("monster3.png");
  m4=loadImage("monster4.png");
  m5=loadImage("monster5.png");
  m6=loadImage("monster6.png");
  m7=loadImage("monster7.png");
  player1=loadImage("player.png");
  player2=loadImage("player1.png");
  arrow=loadImage("arrow.png");
  steps=loadImage("steps.jpg");
  life=loadImage("life.png");
  over_img=loadImage("gameOver.png");
  stone_img=loadImage("stone.png");

}

function setup() {
	createCanvas(windowWidth,windowHeight);
background(255)
step=createSprite(380,300);
    step.addImage(steps);
     RbGroup=createGroup();
     Arrow=createGroup();
     obstaclesGroup=createGroup();
  //p1.addImage(player1);
  //p1.scale=0.7;
  button1=createButton("Boy")
    button2=createButton("Girl")
      //p2=createSprite(500,400);
      //p2.addImage(player2);
      button1.position(800,220);
      button1.style('width', '200px');
      button1.style('height', '40px');
    
      button2.position(800,340);
      button2.style('width', '200px');
      button2.style('height', '40px');
    
     
        button1.mousePressed(() => {
          p1=createSprite(150,300);
          p1.addImage(player1)  
          p1.scale=0.8;
          gameState=1;
        //sound1.play();
        })
        button2.mousePressed(() => {
          p1=createSprite(150,400);
          p1.addImage(player2)
          gameState=1
          p1.scale=0.8;
         // sound1.play();
        })

 }


function draw() {
  if (gameState===0)
  {

    
    step.scale=0.4;

  }
  

  if(gameState===1)
  {
    
    background(bg);
    var score=createSprite(15,30);
    score.addImage(life);
    score.scale=0.1;
    fill("white");
    textSize(20);
    text(":"+live,35,35);

    fill("white");
    textSize(20);
   text("SCORE:"+count,95,35);

    if(count===500 || count>500)
    {
      good1=createSprite(25,65);
      good1.addImage(j1);
      good1.scale=0.2;
      
    }

    if(count===1000 || count>1000)
    {
      good2=createSprite(25,150);
      good2.addImage(j2);
      good2.scale=0.2;
      RbGroup.velocityX=-22;
    }

    if(count===1500 || count>1500)
    {
      good3=createSprite(25,200);
      good3.addImage(j3);
      good3.scale=0.2;
      
    }

    if(count===2000 || count>2000)
    {
      good4=createSprite(25,150);
      good4.addImage(j4);
      good4.scale=0.2;
      
    }

    if(count===2500 || count>2500)
    {
      good5=createSprite(25,220);
      good5.addImage(j5);
      good5.scale=0.2;
      
    }

    if(count===3100 || count>3100)
    {
      good6=createSprite(25,3220);
      good6.addImage(j6);
      good6.scale=0.2;
      
    }



console.log(live);
    step.scale=0.00000001;
   step.x=25;
    step.y=25;
    button1.hide()
    button2.hide()
    monster();
    p1.y=mouseY;
    if(keyDown("space")){
      //sound2.play();
      spawnArrow();
    }
    
      for(var i=0;i<RbGroup.length;i++)
      {
        if(RbGroup.get(i).isTouching(p1))
        {
          live=live-1;
         console.log(live);
         RbGroup.get(i).destroy();
        }
        
      if (RbGroup.get(i).isTouching(Arrow))
         { 
          RbGroup.get(i).destroy();
          Arrow.destroyEach();
          count=count+100;
         
           }
          
     }
     
     if(live===0)
     {
       gameState=2;
     }
     
 
      obstacle();
      for(var j=0;j<obstaclesGroup.length;j++)
      {
      if(obstaclesGroup.get(j).isTouching(Arrow))
      {
        count=count-50;
        obstaclesGroup.get(j).destroy();
          Arrow.destroyEach();
      }
    }

    }
    if(gameState===2)
    {
      background(bg);
      fill("black");
     // sound3.play();
      var gm=createSprite(600,250)
    gm.addImage(over_img);
      gm.scale=1;
    }
    

 
  
  drawSprites();
 
}
function spawnArrow()
{
 arrows=createSprite(p1.x+5,p1.y-8);
 arrows.addImage(arrow);
 arrows.velocityX=20;
 arrows.scale=0.1;
 Arrow.add(arrows);
}

function monster()
{
 if(frameCount%40 === 0)
 {
  var mon1=createSprite(windowWidth,random(0,windowHeight-200),100,100);
 
  var r=Math.round(random(1,7));
  console.log(r);
  switch(r){
  case 1: mon1.addImage(m1);
  break;
  case 2: mon1.addImage(m2);
  break;
  case 3: mon1.addImage(m3);
  break;
  case 4: mon1.addImage(m4);
  break;
  case 5: mon1.addImage(m5);
  break;
  case 6: mon1.addImage(m6);
  break;
  case 7: mon1.addImage(m7);
  break;
  default:break;
 }
  mon1.scale=0.5;
  mon1.velocityX=-20;
  RbGroup.add(mon1);
  
}
 }
 function obstacle()
 {
  if(frameCount%65 === 0)
  {
   var stone=createSprite(random(windowWidth/4,windowWidth),0,200,100);
   stone.addImage(stone_img);
   stone.scale=0.3;
   stone.velocityY=10;
   obstaclesGroup.add(stone);
  }

 }