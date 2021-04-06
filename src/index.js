import "./styles/index.scss";
import Game from './scripts/game';

// document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById("mycanvas");
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext("2d");
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

function animate() {
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    game.render(ctx)
    game.rerender();

    requestAnimationFrame(animate);
}
animate();