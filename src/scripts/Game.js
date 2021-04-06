import Map from './map';
import Leo from './leo';
import Util from './util';

class Game {
    constructor(canvasElWidth, canvasElHeight, ctx) {
        this.canvasElWidth = canvasElWidth;
        this.canvasElHeight = canvasElHeight;
        
        this.map = new Map(canvasElWidth, canvasElHeight);
        this.leo = new Leo(canvasElWidth / 2, canvasElHeight / 2);
        new Util (this.leo, this);

        this.leoDx = this.canvasElWidth/2 - this.leo.x
        this.leoDy = this.canvasElHeight/2 - this.leo.y
    }

    render(ctx) {
        
        this.map.renderMap(ctx);
        // debugger;
        this.leo.renderLeo(ctx);
        // ctx.drawImage()
    }
    
    rerender() {
        // this.map.rerender(this.leoDx, this.leoDy)
        this.leo.moveLeo();
    }

    won() {

    }

    lost() {

    }
}

export default Game;