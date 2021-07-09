import "./styles/index.scss";
import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
  // comment back in
  // const instructions = document.querySelector("#start-play")
  // const playButton = document.querySelector("a.play-button");
  // const restartButton = document.querySelector("a.restart-button");
  // comment back in

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

  animate();

  // comment back in
  // playButton.addEventListener('click', () => {
  //   playButton.style.visibility = 'hidden'
  //   instructions.style.visibility = 'hidden';
  //   animate();
  // });

  // restartButton.addEventListener('click', () => {
  //   restart.Buttonstyle.visibility = 'visible';
  // });
  // comment back in
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