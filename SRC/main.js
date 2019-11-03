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
        <div id="two-select">
        <select name="select-scale" id="select-scale">

    <option value="c">c</option>
    <option value="c#">c#</option>
    <option value="d">d</option>
    <option value="d#">d#</option>
    <option value="e">e</option>
    <option value="f">f</option>
    <option value="f#">f#</option>
    <option value="g">g</option>
    <option value="g#">g#</option>
    <option value="a">a</option>
    <option value="a#">a#</option>
    <option value="b">b</option>
    </select>

    <select name="major-minor" id="major-minor">
    <h2>Select scale<h2>
    <option value="major">Major</option>
    <option value="minor">Minor</option>
    </select>
    </div>
        <button>Start Game</button>
       </main>
      `);
  
      document.body.appendChild(splashScreen);

      
  
      var startButton = splashScreen.querySelector('button');
      startButton.addEventListener('click', function() {
        var scaleList = document.getElementById('select-scale').value;
        var majorMinor = document.getElementById('major-minor').value;
           
        document.getElementById("button-click").play();
        selectScale(scaleList, majorMinor);
        startGame();
       
        
      });
    }


    function selectScale (a,b){
        var findScale = '';
        switch (a) {
            case "c":
            findScale = 'c';
            break;
            case "c#":
            findScale = 'cSharp';
            break;
            case "d":
            findScale = 'd';
            break;
            case "d#":
            findScale = 'dSharp';
            break;
            case "e":
            findScale = 'e';
            break;
            case "f":
            findScale = 'f';
            break;
            case "f#":
            findScale = 'fSharp';
            break;
            case "g":
            findScale = 'g';
            break;
            case "g#":
            findScale = 'gSharp';
            break;
            case "a":
            findScale = 'a';
            break;
            case "a#":
            findScale = 'aSharp';
            break;
            case "b":
            findScale = 'b';
            break;
            default:
    break;
        }
        switch (b) {
            case "major":
            findScale += 'Major';
            break;
            case "minor":
            findScale += 'Minor';
            break;
            default:
    break;
    }
    console.log(findScale);
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

  function gameOver(score) {
                      
    removeGameScreen();
    createGameOverScreen();
  }