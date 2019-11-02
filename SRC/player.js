'use strict';

function Player(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  
    this.size = 100;
    this.x = canvas.width / 2;
    this.y = canvas.height -100;
  }
  

  Player.prototype.draw = function() {
    this.ctx.fillStyle = '#FF69B4';
    // fillRect(x, y, width, height)
    this.ctx.fillRect(this.x, this.y, this.size, this.size/4);
  };


  Player.prototype.didCollide = function(note){
    //   console.log('didCollide func');
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


  Player.prototype.handleScreenCollision = function (){
      if (this.x <= 0){
          this.x = 0;
      }
      if (this.x + this.size >= this.canvas.width){
          this.x = this.canvas.width - this.size;
      }
  }