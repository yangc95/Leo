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
}

export default Houses;
