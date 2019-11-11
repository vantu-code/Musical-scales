'use strict';

class Shoot {
    constructor(canvas, speed, x){
    
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 10;
    this.x = x;
    this.y = canvas.height -100;
    this.speed = speed; 
    }
    
        didCollide(note){

        var shootLeft = this.x;
        var shootRight = this.x + this.size;
        var shootTop = this.y;
        var shootBottom = this.y + this.size;
        
        var noteLeft = note.x;
        var noteRight = note.x + note.size;
        var noteTop = note.y;
        var noteBottom = note.y + note.size;
        
        var crossHorizontally = noteLeft <= shootRight && noteRight >= shootLeft;
        var crossVertically = noteBottom >= shootTop && noteTop <= shootBottom;
        
        if (crossHorizontally && crossVertically) {
            return true;
          }
          return false;
        };

        draw(){
            var imageS = new Image();
            imageS.src = "./Images/shoot.png"
            this.ctx.drawImage(imageS, this.x, this.y, this.size, this.size);
            this.ctx.fill();
        };
 
        updatePosition(){
            this.y = this.y - this.speed;
        };
        
        isInsideScreen(){
            return this.y + this.size /2 > 0;
        };
}





   
   
    