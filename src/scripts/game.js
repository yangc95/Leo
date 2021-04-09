import Map from './map';
import Leo from './leo';
import Util from './util';

class Game {
    constructor(canvasElWidth, canvasElHeight, ctx) {
        this.canvasElWidth = canvasElWidth;
        this.canvasElHeight = canvasElHeight;
        this.ctx = ctx;
        this.map = new Map(canvasElWidth, canvasElHeight, this.ctx);
        this.leo = new Leo(canvasElWidth / 2, canvasElHeight / 2, this.ctx);
        new Util (this.leo, this);
    };
    
    draw() {
        this.map.draw(
            this.ctx, 
            this.canvasElWidth, 
            this.canvasElHeight
        );
        this.leo.draw();
    }
    
    render() {
        this.leoDx = (this.canvasElWidth / 2) - this.leo.x
        this.leoDy = (this.canvasElHeight / 2) - this.leo.y
        this.map.render(this.leoDx, this.leoDy);
        this.leo.render();
    }

    won() {

    }

    lost() {

    }
}

export default Game;
