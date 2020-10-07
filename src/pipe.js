const PIPES_IMG_PATH = './img/pipes/';

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

        this.element = document.querySelector(`.grid__square.x${this.x}y${this.y}`);

        this.angle = angle;

        this.active = false;

    }

    rotate() {
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

        this.element.innerHTML = `<div class="pipe"><img class="straight-pipe-img" src=${PIPES_IMG_PATH}pipe_straight.png" alt=""></div>`;
        this.img = this.element.querySelector('.pipe > img');

        this.direction = {
            n: true,
            w: false,
            s: true,
            e: false
        };

        for (let i = 0; i < this.angle; i += 90) {
            this.rotate();
        }
    }

    updateImg() {
        if (this.active) {
            this.img.src = `${PIPES_IMG_PATH}pipe_straight_active.png`;
        } else {
            this.img.src = `${PIPES_IMG_PATH}pipe_straight.png`;
        }
    }
}


class CurvedPipe extends Pipe {
    constructor(posX, posY, angle) {
        super(posX, posY, angle);

        this.element.innerHTML = `<div class="pipe"><img src=${PIPES_IMG_PATH}"pipe_curve.png" alt=""></div>`;

        this.img = this.element.querySelector('.pipe > img');


        this.direction = {
            n: true,
            w: false,
            s: false,
            e: true,
        };

        for (let i = 0; i < this.angle; i += 90) {
            this.rotate();
        }
    }

    updateImg() {
        if (this.active) {
            this.img.src = `${PIPES_IMG_PATH}pipe_curve_active.png`;
        } else {
            this.img.src = `${PIPES_IMG_PATH}pipe_curve.png`;
        }
    }
}


class TPipe extends Pipe {
    constructor(posX, posY, angle) {
        super(posX, posY, angle);

        this.element.innerHTML = `<div class="pipe"><img src=${PIPES_IMG_PATH}"pipe_t.png" alt=""></div>`;
        this.img = this.element.querySelector('.pipe > img');

        this.direction = {
            n: false,
            w: true,
            s: true,
            e: true
        };

        for (let i = 0; i < this.angle; i += 90) {
            this.rotate();
        }
    }

    updateImg() {
        if (this.active) {
            this.img.src = `${PIPES_IMG_PATH}pipe_t_active.png`;
        } else {
            this.img.src = `${PIPES_IMG_PATH}pipe_t.png`;
        }
    }
}