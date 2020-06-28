class Form{
    constructor(){
        
  //play.mousePressed(hid);
  this.stc = createElement("h1",'Save The Child');
  
        this.play = createButton("Start");
         this.story = createElement("h3",'Once upon a time, mother gone out for shopping. Child was at home and he was kidnapped by the kidnapper. ');
         this.story2 = createElement("h3",'The kidnapper kept the child at his home. Help the baby to go out of the house.');
         kidnap = createSprite(150,150);
         kidnap.addImage(kidnapperImage);
         kidnap.scale = 0.5;
 // kidnap.scale = 0.5;
  baby = createSprite(300,350);
   baby.addImage(babyImage);
   baby.scale = 0.25;
        }
    display(){
        this.story2.position(200,120);
        this.stc.position(700,250);
    this.play.position(1000,400);
    this.story.position(200,100);
    this.play.mousePressed(()=>{
    //  game.play();
    this.stc.hide();
    this.play.hide();
    this.story.hide();
    this.story2.hide();
     kidnap.velocityX = 100;
     baby.velocityX = 95;
     game = new Game();
     game.play();
    });
    }
}