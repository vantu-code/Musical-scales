'use strict';

class Player {
  constructor (canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.size = 100;
    this.x = canvas.width / 2;
    this.y = canvas.height -150;
  }
      draw() {
    this.ctx.fillStyle = '#FF69B4';
    var imageP = new Image();
    imageP.src = "./Images/player6.png"
    this.ctx.drawImage(imageP, this.x, this.y, 73, 100);
    this.ctx.fill();
      };

      didCollide(note){
    var playerLeft = this.x;
    var playerRight = this.x + this.size;
    var playerTop = this.y;
    var playerBottom = this.y + this.size;
    
    var noteLeft = note.x;
    var noteRight = note.x + note.size;
    var noteTop = note.y;
    var noteBottom = note.y + note.size;
    
    var crossRight = noteLeft <= playerRight && noteLeft >= playerLeft;
    var crossLeft = noteRight >= playerLeft && noteRight <= playerRight;
    var crossTop = noteBottom >= playerTop &&noteBottom <= playerBottom;
    var crossBottom = noteTop <= playerBottom && noteTop >= playerTop;
    
    if ((crossRight || crossLeft) && (crossBottom || crossTop)) {
        return true;
      }
      return false;
      };

      handleScreenCollision(){
        if (this.x < 0){
            this.x = 0;
            document.getElementById("touch-wall-left").volume = 0.6;
            document.getElementById("touch-wall-left").play();
        }
        if (this.x + this.size > this.canvas.width){
            this.x = this.canvas.width - this.size;
            document.getElementById("touch-wall-right").volume = 0.6;
            document.getElementById("touch-wall-right").play();
        }
      };
}






