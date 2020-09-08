class Doc {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.h = this.ctx.height;
        this.w = this.ctx.width;

        this.img = new Image(5, 5);
        this.img.src = './img/doc.png';

    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, 100, 150);
    }
}