class Form{
    constructor()
    {
     button1=createButton("Boy")
 button2=createButton("Girl")

 
    }
    hide()
    {
        this.button1.hide();
        this.button2.hide();
    }
    display()
    {
         //button1.visibile=true;
//button2.visibile=true;

     this.button1.position(800,220);
     this. button1.style('width', '200px');
      this.button1.style('height', '40px');
    
     this. button2.position(800,340);
      this.button2.style('width', '200px');
     this. button2.style('height', '40px');
    

         
    }
}