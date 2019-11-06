'use strict';

function Game(scaleFromFunc, scaleName) {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.player = null;
    this.shoot = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
    this.notes = [];
    this.shoots = [];
    this.lives = 3;
    this.scale = scaleFromFunc;
    this.speed = 30;
    this.countFrames = 0;
    this.countSeconds = 0;
    this.countBack = 0;
    this.gameTime = 5000;
    this.collectedNotes = [];
    this.collectedToDisplay = [];
    this.collectedToShow;
    this.data = null;
    this.scaleName = scaleName;
    this.currentSpeed;
   // this.direction = 1;

  }

  //var that = this;

  Game.prototype.printCollected = function(){
    this.collectedToShow = document.getElementById('collected');
    this.collectedNotes.forEach(function(note){
        
      if (!this.collectedToDisplay.includes(note) && this.scale.includes(note)){
        this.collectedToDisplay.push(note);
      }
    },this);

    //console.log("here", this.collectedToShow);
    //this.collectedToDisplay.push('jkkjjk', 'klkkllk');
      
    //console.log(this.collectedNotes);
    

    this.collectedToShow.innerHTML = this.collectedToDisplay.sort().join(" ");
  }

  Game.prototype.start = function() {
    // Get the canvas element, create ctx, save canvas and ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    var currentScale = document.getElementById('scale-notes-title');
    currentScale.innerHTML = this.scale.sort().join(" ");
    this.currentSpeed = document.getElementById('speed');

    
    
  
    // Set the canvas to be same as the viewport size
    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);
  
    // Create new player
    this.player = new Player(this.canvas);
  
//    Add event listener for keydown movements


  this.handleKeyDown = function(event) {
  

if (event.key == 'ArrowDown' && this.speed > 5){
  this.speed -= 5;
}
if (event.key == 'ArrowUp'){
  this.speed += 5;
}
if (event.key == 'ArrowRight'){
this.player.x += this.speed;
}
if (event.key == 'ArrowLeft'){
this.player.x -= this.speed;
}
if (event.key == ' '){

this.shootBall();
document.getElementById("shoot").currentTime = 0;
document.getElementById("shoot").volume = 0.2;
document.getElementById("shoot").play();
}
if (event.key == 'j'){
currentScale.classList.add('visible');

}
if (event.key == 'k'){
  this.collectedToShow.classList.add('visible');
  
  }
  

 if (event.key == 'w'){
  this.notes.forEach(function(note){
    //console.log(note);
   note.speed += 5;
   }, this);
  }
  if (event.key == 's'){
    this.notes.forEach(function(note){
      //console.log(note);
      if (note.speed > 1){
     note.speed -= 1;
    }
     }, this);
    }
//console.log(event.key);
};

this.handleKeyUp = function(event) {
  if (event.key == 'j'){
  currentScale.classList.remove('visible');
  }
  if (event.key == 'k'){
    this.collectedToShow.classList.remove('visible');
    
    }
}


document.addEventListener('keydown', this.handleKeyDown.bind(this));

document.addEventListener('keyup', this.handleKeyUp.bind(this));

   // }
  
    // Start the game loop
  
    this.startLoop();
  };
  
  //------------------------------------
  Game.prototype.shootBall = function() {

      var x = this.player.x + this.player.size/2;
    this.shoots.push(new Shoot(this.canvas, 10, x));

}
//------------------------------------

  Game.prototype.startLoop = function() {
    var loop = function() {

      this.currentSpeed.innerHTML = this.speed;
      this.printCollected();

        if ((Math.random() > 0.97)) {
            var randomX = (this.canvas.width - 30) * Math.random();
            this.notes.push(new Note(this.canvas, randomX, 4));
        }

        this.checkCollisions();
        this.player.handleScreenCollision();

        this.notes = this.notes.filter(function(note){
            
            note.updatePosition();
            return note.isInsideScreen();
            
        });
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //--------------------------------------try---------------------------------
       
        this.shoots = this.shoots.filter(function(shoot){
        
            shoot.updatePosition();
            return shoot.isInsideScreen();
            
        });
        this.shoots.forEach(function(item){
            item.draw();
            
        });


        //--------------------------------------try---------------------------------
        
     

        //---------------------------------------------------------------------------
     
        this.player.draw();
        //console.log('in loop');

        this.notes.forEach(function(item){
            item.draw();
            
        });


      //------------------------------timer------------------------------

      this.countFrames++;
      this.countSeconds = Math.floor(this.countFrames/60);
      this.countBack = this.gameTime -  this.countSeconds;
      document.getElementById('time').innerHTML = this.countBack;
      //console.log("countBack", this.countBack)

      if (this.countBack === 0){
        this.gameIsOver = true;
      }
      
      
      
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      } else {
        this.gameOver(this.score, this.scaleName);
      }
    }.bind(this);
  
    window.requestAnimationFrame(loop);
  };

  Game.prototype.checkCollisions = function(){
      this.notes.forEach(function(note){
          if (this.player.didCollide(note)){

            //++++++++++++++++++++++++++++++
              this.calculatePoints(this.scale, note);
              note.y = this.canvas.height + note.size;
              playAudio(note);
              this.collectedNotes.push(note.key);
              this.checkFullScale(this.scale, this.collectedNotes);
              //console.log(this.collectedNotes);
              //console.log(note.key);
              
               // console.log(`score is ${this.score} and ${this.lives} lives`);
          
          }
          this.shoots.forEach(function(shoot){
            //console.log("canvas width ", this.canvas.width);
            if (shoot.didCollide(note)){

              //++++++++++++++++++++++++++++++
              //here should be inserted the right scale in gamestart
                this.calculatePoints(this.scale, note);
                note.y = this.canvas.height + note.size;
                this.collectedNotes.push(note.key);
                this.checkFullScale(this.scale, this.collectedNotes);
                playAudio(note);
                
            }
          }, this);
       
          
      }, this);

  }
  Game.prototype.checkFullScale = function (scale, collectedNotes){
    var isAllScale = false;
    var noteCount = 0;
    scale.forEach(function(ele){
      if (!collectedNotes.includes(ele)){

      }
      else if (collectedNotes.includes(ele)){
        noteCount++;
      }
    })
    if (noteCount == 7){
      this.score += 500;
      isAllScale = true;
      document.getElementById("collect-all-scale").volume = 0.6;
      document.getElementById("collect-all-scale").play();
      //this.checkFullScale.remove();
      this.collectedNotes = [];
    }
    return isAllScale;
  }

  Game.prototype.calculatePoints = function (scale, currentNote){
    //console.log('calculatePoints here');
    //console.log(currentNote.key);
    var isInScale = false;
    
    scale.forEach(function(ele){
    if (ele === currentNote.key){
        isInScale = true;
    }
    });
    if (isInScale){
        this.score += 50;
        document.getElementById('score').innerHTML = this.score;
    }
    else {
        this.lives --;
        document.getElementById("wrong-note").currentTime = 0;
        document.getElementById("wrong-note").volume = 0.5;
        document.getElementById("wrong-note").play();
        document.getElementById('lives').innerHTML = this.lives;
        console.log("lives", this.lives)
        if (this.lives === 0){
          this.gameIsOver = true;
      }
    }

    //console.log(count);
    
    
}

Game.prototype.passGameOverCallback = function(callback) {
    this.onGameOverCallback = callback;
  };
Game.prototype.gameOver = function(score, scaleName){
      //this.data = new Data(this.score, this.scale);
      // this.gameIsOver = true;
      
      this.onGameOverCallback();
      data(score, scaleName);

  };
Game.prototype.removeGameScreen = function() {
  console.log("Removing")
    this.gameScreen.remove();
  };





    