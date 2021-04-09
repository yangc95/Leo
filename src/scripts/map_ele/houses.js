class Houses {
    constructor(xPos, yPos, ctx) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.ctx = ctx;
        this.xCollision = this.xPos - this.baseWidth;
        this.yCollision = this.yPos - this.baseHeight;
        this.house = new Image();
    }

    drawPollysHouse(dx, dy) {
        const pollysHouse = this.house;
        pollysHouse.src = "src/assets/images/map_elements/pollysHouse.png";

        const baseWidth = 80;
        const baseHeight = 120;
        let leoDx = this.xPos + dx - this.baseWidth;
        let leoDy = this.yPos + dy - this.baseHeight;

        this.ctx.drawImage(pollysHouse, this.xPos, this.yPos, baseWidth * 5, baseHeight * 5);
    }

    drawHewertsHouse(dx, dy) {
        const hewertsHouse = this.house;
        hewertsHouse.src = "src/assets/images/map_elements/hewertsHouse.png";

        const baseWidth = 200;
        const baseHeight = 120;
        let leoDx = this.xPos + dx - this.baseWidth;
        let leoDy = this.yPos + dy - this.baseHeight;

        this.ctx.drawImage(hewertsHouse, 0, 0, baseWidth, baseHeight, 0, 0, baseWidth * 5, baseHeight * 5);
    }
}

export default Houses;