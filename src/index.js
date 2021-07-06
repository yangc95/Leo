import "./styles/index.scss";
import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector("a.play-button");
  const restartButton = document.querySelector("a.restart-button");

  const canvasEl = document.getElementById("mycanvas");
  const ctx = canvasEl.getContext("2d");
  canvasEl.width = 500;
  canvasEl.height = 500;
  ctx.imageSmoothingEnabled = false;
  
  const game = new Game(canvasEl.width, canvasEl.height, ctx);
  // new GameView(game, ctx).start();
  
  function animate() {
    console.log('animate')
    if (game.won()) {
      window.cancelAnimationFrame(window.animationId);
      game.restart();
      return;
    }
    // list any other conditionals above
        
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    game.draw();
    game.render();
    requestAnimationFrame(animate);
  }
  // const STATUS = true;
  // if (STATUS) animate();

  playButton.addEventListener('click', () => {
    playButton.style.visibility = 'hidden';
    // game.start();
    animate();
  });

  restartButton.addEventListener('click', () => {
    restart.Buttonstyle.visibility = 'visible';
  });
});

// export function newGame() {
//     game = new Game(canvas.width, canvas.height, ctx);
//     document.getElementById("start-div").style.visibility = "visible";
//     document.getElementById("end-div").style.visibility = "hidden";
// }

// window.addEventListener("keydown", e => {
//     keys[e.keyCode] = true; 
// });
// window.addEventListener("keyup", e => {
//     delete keys[e.keyCode]; 
// });