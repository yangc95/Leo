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
        this.house = new Houses(this.ctx);
        // this.map.onload = () => ctx.drawImage(this.map, 0, 0, width, height)
    }
    
    draw(ctx) {
        let mapSize = this.width * this.magnify;
        ctx.drawImage(
            this.map, 
            0, 0, 
            this.map.width, 
            this.map.height, 
            -(this.map.width) + this.xPos, 
            -(this.map.height) + this.yPos, 
            mapSize, mapSize
        );

        // console.log(this.xPos + "and" + this.yPos)
        if (this.xPos <= 525 && this.xPos >= -500 && this.yPos <= 750 && this.yPos >= -350) {
            this.house.drawHewertsHouse(this.xPos, this.yPos);
        }
    }

    render(leoDx, leoDy) {
        // if (this.xPos < 1250 && this.yPos < 1250) {
            this.xPos = leoDx;
            this.yPos = leoDy;

        // }
    }
}

export default Map;
