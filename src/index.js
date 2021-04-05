import "./styles/index.scss";
import Game from './scripts/Game'

const canvasEl = document.getElementById("mycanvas");
canvasEl.width = 500;
canvasEl.height = 500;

let ctx = canvasEl.getContext("2d");
console.log(ctx);


let mapWidth = 2000 * 2;
let mapHeight = 2000 * 2;

// export function newGame() {
//     game = new Game(canvas.width, canvas.height, ctx);
//     document.getElementById("start-div").style.visibility = "visible";
//     document.getElementById("end-div").style.visibility = "hidden";
// }

let game = new Game(canvasEl.width, canvasEl.height, mapWidth, mapHeight, ctx);

// window.requestAnimationFrame(animate);
// function animate() {
//     ctx.imageSmoothingEnabled = false;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     game.updateGame()
//     game.drawGame(ctx)

//     window.requestAnimationFrame(animate);
// }
