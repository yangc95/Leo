import "./styles/index.scss";
import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
  const instructions = document.querySelector("#start-play")
  const playButton = document.querySelector("a.play-button");
  const restartButton = document.querySelector("a.restart-button");

  const canvasEl = document.getElementById("mycanvas");
  const ctx = canvasEl.getContext("2d");
  canvasEl.width = 500;
  canvasEl.height = 500;
  ctx.imageSmoothingEnabled = false;
  
  const game = new Game(canvasEl.width, canvasEl.height, ctx);
  
  function animate() {
    console.log('animate')
    if (game.won()) {
      window.cancelAnimationFrame(window.animationId);
      game.restart();
      return;
    }
    
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    game.draw();
    game.render();
    requestAnimationFrame(animate);
  }

  playButton.addEventListener('click', () => {
    playButton.style.visibility = 'hidden'
    instructions.style.visibility = 'hidden';
    animate();
  });

  restartButton.addEventListener('click', () => {
    restart.Buttonstyle.visibility = 'visible';
  });
});
