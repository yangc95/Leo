import Houses from './map_ele/houses';
import Shrubs from './map_ele/shrubs';

class Map {
    constructor(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.magnify = 5;
        this.xPos = 0;
        this.yPos = 0;
        this.map = new Image();
        this.map.src = "src/assets/images/map/bgMap.png";
        this.house = new Houses(this.xPos, this.yPos, this.magnify, this.ctx);
    }
    
    draw(ctx) {
        let mapSize = this.width * this.magnify;
        ctx.drawImage(
            this.map, 
            0, 0, 
            this.map.width, 
            this.map.height, 
            this.xPos - this.map.width, 
            this.yPos - this.map.height, 
            mapSize, mapSize
        );
    }

    render(leoDx, leoDy) {
        this.xPos = leoDx;
        this.yPos = leoDy;
    }
}

export default Map;
