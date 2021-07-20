class Rooms {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.room = {
            polly: new Image(),
            hewert: new Image()
        };
    }

    drawPollysRoom() {
        const pollysRoom = this.room.polly;
        pollysRoom.src = "src/assets/images/map/pollysRoom.png";

        this.ctx.drawImage(pollysRoom, 0, 0, this.width /5, this.height/5);
    }

    drawHewertsRoom() {
        const hewertsRoom = this.room.hewert;
        hewertsRoom.src = "src/assets/images/map/hewertsRoom.png";

        this.ctx.drawImage(hewertsRoom, 0, 0, this.width, this.height)
    }
}

export default Rooms;