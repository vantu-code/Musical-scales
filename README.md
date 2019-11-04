# Musical-scales

## Description
Musical Scales is a game to study new musical scales.
all notes will randomly fall downwards and the player need to collect only the notes that are used in the specific mentioned musical scale.
every collision with the player and a note will increase or decrease points and play the specific notes.

## MVP (DOM - CANVAS)
*CANVAS*, This is a game where the player can move and play notes in scale.

## Backlog
- visual Piano that colors the current played key.
- Timing the keys to play within a fixed BPM
- Adding all the notes that were collected on the side.
- Get username and create leaderboard
- Leaderboard of scales and scores
- Timer



## Data structure

### main.js
```

buildSplashScreen(){
}

buildGameScreen(){
}

buildGameOverScreen(){
}
```

### game.js
```
Game(){
  this.canvas;
}

Game.prototype.startLoop(){
}

Game.prototype.checkCollisions{
}

Game.prototype.defineGoodOrbadNotes(){
}

Game.prototype.calculatePoints(){
}

Game.prototype.createPlayer(){
}

Game.prototype.createNotes(){
}

Game.prototype.updateLevel(){
}

Game.prototype.clearCanvas = function(){
}

Game.prototype.updateCanvas = function(){
}

Game.prototype.drawCanvas = function(){ 
}

Game.prototype.setGameOver = function(){
}

}
```

### notes.js
```
MovingSquare(){
  this.camvas;
  this.x;
  this.y;
  this.size;
  this.direction;
  this.speed; 
  this.color;
}

MovingSquare.prototype.draw{
}

Character.prototype.setDirection(){
}

Character.prototype.goDown(){
}


```


## States & States Transitions
```
- splashScreen()
  - buildSplash()
  - addEventListener(startGame)
  
  
- starGame()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - buildGameOver()
  - addEventListener(startGame) 
```

## Task
- Main - buildDom
- Main - buildSplashScreen
- Main - addEventListener
- Main - buildGameScreen
- Main - buildGameOverScreen
- Game - buildCanvas
- Game - clearCanvas
- Game - updateCanvas
- Game - drawCanvas
- Game - setGameOver
- Game - collision
- Game - update score
- Game - addEventListener
- notes - create
- notes - goDown
- notes - SelectRandomSize
- notes - check if a collision was made
- notes - check if note is in scale or not



## Links


### Trello
https://trello.com/b/TmPvhrho/musical-scales


### Git



### Slides

