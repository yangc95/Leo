class Leo {
    constructor(x, y) {
        this.leo = new Image();
        this.leo.src = "src/assets/images/sprite/LeoWalkCycle.png";
        // state of leo
        this.x = x;
        this.y = y;
        
        this.size = 100;
        this.dir = 0; // which key is held down
        this.trotting = 0;
        this.speed = 0.1

        this.right = false;
        this.left = false;
        this.down = false;
        this.up = false;
    }

    renderLeo(ctx) { // render(ctx, width, height)
        // console.log("where the heck is leo")
        let spriteSize = this.size / 4;
        let trot = Math.floor(this.trotting % 4);
        ctx.drawImage(this.leo, trot * spriteSize, this.dir * spriteSize, spriteSize, spriteSize, this.x - 50, this.y - 50, this.size, this.size);
    }

    moveLeo() {
        // const dir = dir[0];
        // if (dir) {
        //     if (this.right) { this.trotting += this.speed; }
        //     if (this.left) { this.trotting -= this.speed; }
        //     if (this.down) { this.trotting += this.speed; }
        //     if (this.up) { this.trotting -= this.speed; }      
        // }
        const dir = {
            "right": 0,
            "left": 1,
            "down": 2,
            "up": 3
        }

        if (this.right) {
            this.dir = dir["right"];
            this.trotting += this.speed;
        } else if (this.left) {
            this.dir = dir["left"];
            this.trotting += this.speed;
        } else if (this.down) {
            this.dir = dir["down"];
            this.trotting += this.speed;
        } else if (this.up) {
            this.dir = dir["up"];
            this.trotting += this.speed;
        }

    }
}

export default Leo;