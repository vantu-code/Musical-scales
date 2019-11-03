'use strict';

function Shoot(canvas, speed, x) {
    
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 5;
    this.x = x;
    this.y = canvas.height -100;
    this.speed = speed; 
    
}


Shoot.prototype.didCollide = function(note){
      console.log('didCollide func');
var shootLeft = this.x;
var shootRight = this.x + this.size;
var shootTop = this.y;
var shootBottom = this.y + this.size;

var noteLeft = note.x;
var noteRight = note.x + note.size;
var noteTop = note.y;
var noteBottom = note.y + note.size;

var crossRight = noteLeft <= shootRight && noteLeft >= shootLeft;
var crossLeft = noteRight >= shootLeft && noteRight <= shootRight;
var crossTop = noteBottom >= shootTop &&noteBottom <= shootBottom;
var crossBottom = noteTop <= shootBottom && noteTop >= shootTop;

if ((crossRight || crossLeft) && (crossBottom || crossTop)) {
    return true;
  }
  return false;
  };




    Shoot.prototype.draw = function(){
    this.ctx.fillStyle = '#070f0a';
    
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
    
    };
    
    Shoot.prototype.updatePosition = function(){
        this.y = this.y - this.speed;
    }
    
    Shoot.prototype.isInsideScreen = function(){
        return this.y + this.size /2 > 0;
    }
    