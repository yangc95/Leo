class Leo {
    constructor(x, y, ctx) {
        this.leo = new Image();
        this.leo.src = "src/assets/images/sprite/LeoWalkCycle.png";
        // state of leo
        this.x = x;
        this.y = y;
        this.ctx = ctx;

        this.size = 100;
        this.dir = 0; // which key is held down
        this.trotting = 0;
        this.speed = 0.1; // would be cool to allow user to increase this

        this.right = false;
        this.left = false;
        this.down = false;
        this.up = false;
    }

    draw() { // render(ctx, width, height)
        let spriteSize = this.size / 4;
        let trot = Math.floor(this.trotting % 4);
        this.ctx.drawImage(this.leo, trot * spriteSize, this.dir * spriteSize, spriteSize, spriteSize, 200, 200, this.size, this.size);   
        // console.log(`${this.x} and ${this.y}`)
    }

    render() {
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
        
        if (this.right && this.x < 1950) {
            this.dir = dir["right"];
            this.trotting += this.speed;
            this.x += 3;
        } else if (this.left && this.x > -460) {
            this.dir = dir["left"];
            this.trotting += this.speed;
            this.x -= 3;
        } else if (this.down && this.y < 1925) {
            this.dir = dir["down"];
            this.trotting += this.speed;
            this.y += 3;
        } else if (this.up && this.y > -500) {
            this.dir = dir["up"];
            this.trotting += this.speed;
            this.y -= 3;
        }
    }
}

export default Leo;
