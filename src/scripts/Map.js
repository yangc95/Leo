class Map {
    constructor(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.map = new Image();
        this.map.src = "src/assets/images/map/mapPractice.png";
        this.map.onload = () => {
            ctx.drawImage(this.map, -200, -500)
        }
    }

    
}

export default Map;