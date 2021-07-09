class Houses {
    constructor(ctx) {
        this.ctx = ctx;
        this.house = new Image();
    }

    // drawPollysHouse(dx, dy) {
    //     const pollysHouse = this.house;
    //     pollysHouse.src = "src/assets/images/map_elements/pollysHouse.png";

    //     const baseWidth = 80;
    //     const baseHeight = 120;
    //     let leoDx = baseWidth;
    //     let leoDy = baseHeight;

    //     this.ctx.drawImage(pollysHouse, 0, 0);
    // }

    drawHewertsHouse(dx, dy) {
        const hewertsHouse = this.house;
        hewertsHouse.src = "src/assets/images/map_elements/hewertsHouse.png";

        const baseWidth = 200;
        const baseHeight = 120;

        // console.log(leoDy)

        // this.ctx.drawImage(hewertsHouse, 0, 0, baseWidth, baseHeight, dx, dy, baseWidth * 3, baseHeight * 3);
        this.ctx.drawImage(hewertsHouse, -70 + dx, -90 + dy, baseWidth * 3, baseHeight * 3)
    }
}

export default Houses;