import "./styles/index.scss";
import Game from './scripts/Game'

export function newGame() {
    game = new Game();
    document.getElementById('cat-cam');
}

let game = new Game();