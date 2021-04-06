class Map {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        // this.xPos = 0;
        // this.yPos = 0;
        this.map = new Image();
        this.map.src = "src/assets/images/map/mapPractice.png";
        // this.map.onload = () => ctx.drawImage(this.map, 0, 0, width, height)
    }
    
    renderMap(ctx) {
        ctx.drawImage(this.map, 0, 0, this.width * 5, this.height * 5);
    }
}

export default Map;