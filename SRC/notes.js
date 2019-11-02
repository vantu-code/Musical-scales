'use strict';

function Note(canvas, x, speed) {
    
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = Math.random() * 40;
    this.key = allNotes[Math.floor(Math.random() * allNotes.length)]
    this.x = x;
    this.y = 0 - this.size;
    this.speed = speed;
    
}
var allNotes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
var cMajor = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

Note.prototype.draw = function(){
this.ctx.fillStyle = '#303437';

this.ctx.fillRect(this.x, this.y, this.size, this.size);

};

Note.prototype.updatePosition = function(){
    this.y = this.y + this.speed;
}

Note.prototype.isInsideScreen = function(){
    return this.y + this.size /2 < this.canvas.height;
}

