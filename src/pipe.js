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

        this.element = document.querySelector(`.square.x${this.x}y${this.y}`)
        this.element.innerHTML = '<div class="pipe"><img src="./img/blue_pipe.png" alt=""></div>'

        this.angle = angle;

        this.active = false;

    }

    _rotate() {
        if (this.angle === 360) this.angle = 0;

        this.element.style.transform = `rotate(${this.angle}deg)`;
        
        const temp = this.direction.n;
        this.direction.n = this.direction.w;
        this.direction.w = this.direction.s;
        this.direction.s = this.direction.e;
        this.direction.e = temp;
    }
}


class StraightPipe extends Pipe {
    constructor(posX, posY, angle) {
        super(posX, posY, angle);

        this.element.innerHTML = '<div class="pipe"><img src="./img/blue_pipe.png" alt=""></div>';

        this.direction = {
            n: true,
            w: false,
            s: true,
            e: false
        };

        for (let i = 0; i < this.angle; i += 90) {
            this._rotate();
        }
    }
}


class CurvedPipe extends Pipe {
    constructor(posX, posY, angle) {
        super(posX, posY, angle);

        this.element.innerHTML = '<div class="pipe"><img src="./img/blue_curve.png" alt=""></div>';

        this.direction = {
            n: false,
            w: false,
            s: true,
            e: true
        };

        for (let i = 0; i < this.angle; i += 90) {
            this._rotate();
        }
    }
}


class TPipe extends Pipe {
    constructor(posX, posY, angle) {
        super(posX, posY, angle);

        this.element.innerHTML = '<div class="pipe"><img src="./img/blue_t.png" alt=""></div>';

        this.direction = {
            n: false,
            w: true,
            s: true,
            e: true
        };

        for (let i = 0; i < this.angle; i += 90) {
            this._rotate();
        }
    }
}


