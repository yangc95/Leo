import Map from './map';
import Leo from './leo';
import Story from './story';
import Util from './util';

class Game {
    constructor(canvasElWidth, canvasElHeight, ctx) {
        this.canvasElWidth = canvasElWidth;
        this.canvasElHeight = canvasElHeight;
        this.ctx = ctx;
        this.map = new Map(canvasElWidth, canvasElHeight, this.ctx);
        this.leo = new Leo(canvasElWidth / 2, canvasElHeight / 2, this.ctx);
        this.story = new Story();
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
        let leoDx = (this.canvasElWidth / 2) - this.leo.x
        let leoDy = (this.canvasElHeight / 2) - this.leo.y
        // console.log(leoDx);
        this.map.render(leoDx, leoDy);
        this.leo.render();
    }

    won() {

    }

    lost() {

    }
}

export default Game;
