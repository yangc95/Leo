import "./styles/index.scss";
import Game from './scripts/game';

// document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById("mycanvas");
    const canvasDimension = 500;
    canvasEl.width = canvasDimension;
    canvasEl.height = canvasDimension;

    const ctx = canvasEl.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    
    let game = new Game(canvasEl.width, canvasEl.height, ctx);
    // new GameView(game, ctx).start();
// });

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
const STATUS = true;

function animate() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    game.draw(ctx)
    game.render();
    requestAnimationFrame(animate);
}
if (STATUS) animate();