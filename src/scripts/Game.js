import Map from './Map';
import Leo from './Leo';

const STORYPOINT = {
    
}


class Game {
    constructor(canvasWidth, canvasHeight, mapWidth, mapHeight, ctx) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
        this.map = new Map(this.mapWidth, this.mapHeight, ctx);
        this.leo = new Leo(100, 100);
    }

    drawGame() {

    }


}

export default Game;