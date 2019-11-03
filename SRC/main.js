'use strict';

function buildDom(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
  
    return div.children[0];
  }
  
  function main() {
    var splashScreen;
  
    function createSplashScreen() {
      splashScreen = buildDom(`
       <main id="splash">
        <h1>Musical Scales</h1>
        <button>Start Game</button>
       </main>
      `);
  
      document.body.appendChild(splashScreen);
  
      var startButton = splashScreen.querySelector('button');
      startButton.addEventListener('click', function() {
        startGame();
      });
    }
  
    function removeSplashScreen() {
      splashScreen.remove();
    }
  
    function createGameScreen() {
      var gameScreen = buildDom(`
        <main class="game">
        <div id="headline">
          <span>Score: </span><span id="score">0</span>
          <span>Lives: </span><span id="lives">3</span>
        </div>
          <section class="canvas-container">
            <canvas></canvas>
          </section>
        </main>
     `);
  
      document.body.appendChild(gameScreen);
  
      return gameScreen;
    }
  
    function startGame() {
      removeSplashScreen();
  
      var game = new Game();
      game.gameScreen = createGameScreen();
  
      game.start();
    }
  
    createSplashScreen();
  }
  
  window.onload = main;