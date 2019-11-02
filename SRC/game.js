

function Game() {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
    this.notes = [];
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
   
if (event.key == 'ArrowRight'){
this.player.x += 50;
}
if (event.key == 'ArrowLeft'){
this.player.x -= 50;
}
//console.log(event.key, this.player.x);
};

document.addEventListener('keydown', this.handleKeyDown.bind(this));

   // }
  
    // Start the game loop
  
    this.startLoop();
  };
  



  Game.prototype.startLoop = function() {
    var loop = function() {


        if ((Math.random() > 0.98) && (Math.random() > 0.7)) {
            var randomX = this.canvas.width * Math.random();
            this.notes.push(new Note(this.canvas, randomX, 3));
        }

        this.checkCollisions();
        this.player.handleScreenCollision();

        this.notes = this.notes.filter(function(note){
            
            note.updatePosition();
            return note.isInsideScreen();
            
        });

      
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
  
      window.requestAnimationFrame(loop);
    }.bind(this);
  
    window.requestAnimationFrame(loop);
  };

  Game.prototype.checkCollisions = function(){
      this.notes.forEach(function(note){
          if (this.player.didCollide(note)){

            //++++++++++++++++++++++++++++++
            //here should be inserted the right scale in gamestart
              this.calculatePoints(cMajor, note);
              note.y = this.canvas.height + note.size;
              console.log(note.key);
              
                console.log(`score is ${this.score}`);
            //   if (this.player.lives === 0){
            //       this.gameOver();
            //   }
          }
      }, this);
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
    }
    else {
        this.score -=2;
    }

    //console.log(count);
    
    
}
  Game.prototype,gameOver = function(){
      this.gameIsOver = true;
  }