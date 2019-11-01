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
- adding all the notes that were collected on the side.




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

### staticSquare.js
```
StaticSquare(){
  this.camvas;
  this.x;
  this.y;
  this.size;
  this.color;
}

StaticSquare.prototype.draw{
}

```


## States y States Transitions
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
- Game - addEventListener
- movingSquare - create
- movingSquare - goDown
- staticSquare - store
- staticSquare - remove if full line
- Game - checkOverFlow
- movingSquare - setDirection
- movingSquare - Rush
- movingSquare - SelectRandomSize


## Links


### Trello
[Link url](https://trello.com/b/O2Molfl5/tetris)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/chloeleteinturier/Tetris)
[Link Deploy](https://chloeleteinturier.github.io/Square-Tetris/)


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/12aWbkPZlli7qyOwh-r7aFmeflMeICDQl4ZWgLbv21e8/edit?usp=sharing)
