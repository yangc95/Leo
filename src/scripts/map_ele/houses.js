class Houses {
    constructor(xPos, yPos, magnify, ctx) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.magnify = magnify;
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
        let leoDx = baseWidth;
        let leoDy = baseHeight;

        // this.ctx.drawImage(pollysHouse, , 0, baseWidth * 5, baseHeight * 5);
    }

    drawHewertsHouse(dx, dy) {
        const hewertsHouse = this.house;
        hewertsHouse.src = "src/assets/images/map_elements/hewertsHouse.png";

        const baseWidth = 200;
        const baseHeight = 120;
        let leoDx = this.xPos - baseWidth;
        let leoDy = this.yPos - baseHeight;

        // console.log(leoDy)
        this.ctx.drawImage(hewertsHouse, 0, 0, baseWidth, baseHeight, dx, dy, baseWidth * 3, baseHeight * 3);
    }
}

export default Houses;