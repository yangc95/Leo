import Map from './map';
import MapElements from './map_elements';
import Leo from './leo';
import Util from './util';

class Game {
    constructor(canvasElWidth, canvasElHeight, ctx) {
        this.canvasElWidth = canvasElWidth;
        this.canvasElHeight = canvasElHeight;
        this.map = new Map(canvasElWidth, canvasElHeight);
        this.leo = new Leo(canvasElWidth / 2, canvasElHeight / 2);
        new Util (this.leo, this);
    };
    
    draw(ctx) {
        this.map.draw(
            ctx, 
            this.canvasElWidth, 
            this.canvasElHeight
        );
        // debugger;
        this.leo.draw(ctx);
        // ctx.drawImage()
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
