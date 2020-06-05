class Pipe {
    constructor(posX, posY, angle) {
        this.x = posX;
        this.y = posY;
        this.direction = {
            n: false,
            w: false,
            s: false,
            e: false
        };

        this.element = document.querySelector(`.square.x${this.x}y${this.y} div`)

        this.angle = angle;
        //need to write a method such that this.angle is reflected when pipe is created

        this.active = false;

        this._setClick();
    }

    _setClick() {
        this.element.addEventListener('click', () => {
            this.rotate();
        })
    }

    rotate() {
        this.angle += 90;
        if (this.angle === 360) this.angle = 0;

        this.element.style.transform = `rotate(${this.angle}deg)`;

        this.n = this.w;
        this.w = this.s;
        this.s = this.e;
        this.e = this.n;
    }


}