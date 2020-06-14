class Doc {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.h = this.ctx.height;
        this.w = this.ctx.width;

        this.img = new Image(25, 25);
        this.img.src = './img/doc.png';

    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y);
        /*     
        this.ctx.beginPath();
        this.ctx.rect(20, 20, 150, 100);
        this.ctx.stroke(); 
        */
    }
}