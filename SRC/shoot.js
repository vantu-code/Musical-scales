'use strict';

function Shoot(canvas, speed, x) {
    
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 10;
    this.x = x;
    this.y = canvas.height -100;
    this.speed = speed; 
    
}


Shoot.prototype.didCollide = function(note){
      //console.log('didCollide func');
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
//var crossRight = noteLeft <= shootRight && noteLeft >= shootLeft;
//var crossLeft = noteRight >= shootLeft && noteRight <= shootRight;
//var crossTop = noteBottom >= shootTop && noteBottom <= shootBottom;
//var crossBottom = noteTop <= shootBottom && noteTop >= shootTop;

if (crossHorizontally && crossVertically) {
    return true;
  }
  return false;
  };




    Shoot.prototype.draw = function(){
    //this.ctx.fillStyle = '#070f0a';
    var imageS = new Image();
    imageS.src = "./Images/shoot.png"
    this.ctx.drawImage(imageS, this.x, this.y, this.size, this.size);
    this.ctx.fill();
    
    };
    
    Shoot.prototype.updatePosition = function(){
        this.y = this.y - this.speed;
    }
    
    Shoot.prototype.isInsideScreen = function(){
        return this.y + this.size /2 > 0;
    }
    