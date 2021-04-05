import "./styles/index.scss";
import Game from './scripts/Game'

let canvas = document.getElementById("canvas");
let ctx = canvas.getBoundingClientRect("2d");
canvas.width = 500;
canvas.height = 500;

export function newGame() {
    game = new Game();
    document.getElementById("canvas");
}

let game = new Game();