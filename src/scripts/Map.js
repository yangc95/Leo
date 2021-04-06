class Map {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.magnify = 5;
        this.xPos = 0;
        this.yPos = 0;
        this.map = new Image();
        this.map.src = "src/assets/images/map/mapPractice.png";
        // this.map.onload = () => ctx.drawImage(this.map, 0, 0, width, height)
    }
    
    draw(ctx) {
        let mapSize = this.width * this.magnify;
        ctx.drawImage(this.map, 0, 0, this.map.width, this.map.height, this.xPos, this.yPos, mapSize, mapSize); //, 0, 0, mapSize, mapSize);
    }

    render(leoDx, leoDy) {
        // if (this.xPos < 100) {
            this.xPos = leoDx;
            this.yPos = leoDy;

        // }
    }
}

export default Map;