'use strict';

function Game(scaleFromFunc) {
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
    this.speed = 20;
    this.countFrames = 0;
    this.countSeconds = 0;
    this.countBack = 50;
   // this.direction = 1;

  }




  //var that = this;

  Game.prototype.start = function() {
    // Get the canvas element, create ctx, save canvas and ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    
  
    // Set the canvas to be same as the viewport size
    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);
  
    // Create new player
    this.player = new Player(this.canvas);
  
//    Add event listener for keydown movements


  this.handleKeyDown = function(event) {
    document.getElementById('speed').innerHTML = this.speed;
if (event.key == 'ArrowDown'){
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
    //console.log('spaceeeee');
    this.shootBall();
    document.getElementById("shoot").currentTime = 0;
    document.getElementById("shoot").volume = 0.2;
    document.getElementById("shoot").play();
    }
//console.log(event.key, this.player.x);
};

document.addEventListener('keydown', this.handleKeyDown.bind(this));

   // }
  
    // Start the game loop
  
    this.startLoop();
  };
  
  //------------------------------------
  Game.prototype.shootBall = function() {
      //console.log('shoot function');
      var x = this.player.x + this.player.size/2;
    this.shoots.push(new Shoot(this.canvas, 10, x));
    //console.log('shooooots    ', this.shoots);
}
//------------------------------------

  Game.prototype.startLoop = function() {
    var loop = function() {


        if ((Math.random() > 0.98)) {
            var randomX = (this.canvas.width - 30) * Math.random();
            this.notes.push(new Note(this.canvas, randomX, 3));
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
            //console.log('here?');
            shoot.updatePosition();
            return shoot.isInsideScreen();
            
        });
        this.shoots.forEach(function(item){
            item.draw();
            
        });


        //--------------------------------------try---------------------------------

      
     
        this.player.draw();
        //console.log('in loop');

        this.notes.forEach(function(item){
            item.draw();
            
        });


        
        // if (this.player.x > this.canvas.width) {
        //     this.direction = -1;
        // } else  if (this.player.x < 0){
        //     this.direction = +1;
        // }
        // if (this.direction == 1){
        // this.player.x++;
        // }
        // else if (this.direction == -1){
        //     this.player.x--;
        //     }

    //     console.log("toooooooooo", this.direction, this.player.x);
        
  
      //this.player.draw();
      //------------------------------timer------------------------------

      this.countFrames++;
      this.countSeconds = Math.floor(this.countFrames/60);
      this.countBack = 5 -  this.countSeconds;
      document.getElementById('time').innerHTML = this.countBack;
      if (this.countBack === 0){
        this.gameOver(this.score);
    }
    


      if (!this.gameIsOver) {
      window.requestAnimationFrame(loop);
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
              console.log(note.key);
              
               // console.log(`score is ${this.score} and ${this.lives} lives`);
              if (this.player.lives === 0){
                  this.gameOver(this.score);
              }
          }
          this.shoots.forEach(function(shoot){
            console.log("canvas width ", this.canvas.width);
            if (shoot.didCollide(note)){

              //++++++++++++++++++++++++++++++
              //here should be inserted the right scale in gamestart
                //this.calculatePoints(cMajor, note);
                note.y = this.canvas.height + note.size;
                //playAudio(note);
                
                //console.log(`score is ${this.score}`);
              //   if (this.player.lives === 0){
              //       this.gameOver();
              //   }
            }
          }, this);
       
          
      }, this);

    //   this.notes.forEach(function(note){
    //     if (this.shoot.didCollide(note)){

    //       //++++++++++++++++++++++++++++++
    //       //here should be inserted the right scale in gamestart
    //         //this.calculatePoints(cMajor, note);
    //         note.y = this.canvas.height + note.size;
    //         //playAudio(note);
    //         console.log('from shoot');
            
    //         //console.log(`score is ${this.score}`);
    //       //   if (this.player.lives === 0){
    //       //       this.gameOver();
    //       //   }
    //     }
    // }, this);
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
        this.score ++;
        document.getElementById('score').innerHTML = this.score;
    }
    else {
        this.lives --;
        document.getElementById("wrong-note").currentTime = 0;
        document.getElementById("wrong-note").volume = 0.5;
        document.getElementById("wrong-note").play();
        document.getElementById('lives').innerHTML = this.lives;
        if (this.lives === 0){
          this.gameOver(this.score);
      }
    }

    //console.log(count);
    
    
}

Game.prototype.passGameOverCallback = function(callback) {
    this.onGameOverCallback = callback;
  };
Game.prototype.gameOver = function(){
      this.gameIsOver = true;
      this.onGameOverCallback();
  };
Game.prototype.removeGameScreen = function() {
    this.gameScreen.remove();
  };





    