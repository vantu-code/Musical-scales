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

var cMajor = [allNotes[0], allNotes[2], allNotes[4], allNotes[5], allNotes[7], allNotes[9], allNotes[11]];
var cSharpMajor = [allNotes[1], allNotes[3], allNotes[5], allNotes[6], allNotes[8], allNotes[10], allNotes[0]];
var dMajor = [allNotes[2], allNotes[4], allNotes[6], allNotes[7], allNotes[9], allNotes[11], allNotes[1]];
var dSharpMajor = [allNotes[3], allNotes[5], allNotes[7], allNotes[8], allNotes[10], allNotes[0], allNotes[2]];
var eMajor = [allNotes[4], allNotes[6], allNotes[8], allNotes[9], allNotes[11], allNotes[1], allNotes[3]];
var fMajor = [allNotes[5], allNotes[7], allNotes[9], allNotes[10], allNotes[0], allNotes[2], allNotes[4]];
var fSharpMajor = [allNotes[6], allNotes[8], allNotes[10], allNotes[11], allNotes[1], allNotes[3], allNotes[5]];
var gMajor = [allNotes[7], allNotes[9], allNotes[11], allNotes[0], allNotes[2], allNotes[4], allNotes[6]];
var gSharpMajor = [allNotes[8], allNotes[10], allNotes[0], allNotes[1], allNotes[3], allNotes[5], allNotes[7]];
var aMajor = [allNotes[9], allNotes[11], allNotes[1], allNotes[2], allNotes[4], allNotes[6], allNotes[8]];
var aSharpMajor = [allNotes[10], allNotes[0], allNotes[2], allNotes[3], allNotes[5], allNotes[7], allNotes[9]];
var bMajor = [allNotes[11], allNotes[1], allNotes[3], allNotes[4], allNotes[6], allNotes[8], allNotes[10]];

var aMinor = cMajor;
var aSharpMinor = cSharpMajor;
var bMinor = dMajor;
var cMinor = dSharpMajor;
var cSharpMinor = eMajor;
var dMinor = fMajor;
var dSharpMinor = fSharpMajor;
var eMinor = gMajor;
var fMinor = gSharpMajor;
var fSharpMinor = aMajor;
var gMinor = aSharpMajor;
var gSharpMinor = bMajor;





//console.log(`aMinor is ${aMinor}`);


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

