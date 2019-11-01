'use strict';

function buildDom(htmlString){
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
}

function main() {
    var game; // instance of the Game
    var splashScreen; // Start Screen
    var gameOverScreen;
  
      
    // -- splash screen
  
    function createSplashScreen() {};
  
    function removeSplashScreen() {};
  
      
    // -- game screen
  
    function createGameScreen() {};
  
    function removeGameScreen() {};
  
      
    // -- game over screen
  
    function createGameOverScreen(score) {};
  
    function removeGameOverScreen() {};
  
      
    // -- Setting the game state 
  
    function startGame() {};
  
    function gameOver() {};
  
      
    // -- initialize Splash screen on initial start
    createSplashScreen();
  }
  
  // Runs the function `main` once all resources are loaded
  window.addEventListener('load', main);