class Pipe {
    constructor(posX, posY) {
        this.active = false;
        this.x = posX;
        this.y = posY;
        this.direction = {
            n: false,
            w: false,
            s: false,
            e: false
        };
        this.htmlElement = document.querySelector(`.grid__square.x${this.x}y${this.y}`);
        this.angle = 0;

        this.clickSound = new Audio('./sounds/click.mp3');
    }

    handleClick() {
        this.clickSound.play();
        this.rotate();
    }

    rotate(angle = 90) {
        for(let turns = angle / 90; turns > 0; turns--) {
            this.angle += 90;
            if (this.angle === 360) this.angle = 0;

            this.htmlElement.style.transform = `rotate(${this.angle}deg)`;

            const temp = this.direction.n;
            this.direction.n = this.direction.w;
            this.direction.w = this.direction.s;
            this.direction.s = this.direction.e;
            this.direction.e = temp;
        }
    }
}

class StraightPipe extends Pipe {
    constructor(posX, posY, angle) {
        super(posX, posY, angle);
        this.htmlElement.innerHTML = `<div class="pipe"><img class="straight-pipe-img" src=${PIPES_IMG_PATH}pipe_straight.png" alt=""></div>`;
        this.img = this.htmlElement.querySelector('.pipe > img');

        this.direction = {
            n: true,
            w: false,
            s: true,
            e: false
        };
        this.rotate(angle);
    }

    //this could be refactored if activeImg & normalImg were class properties and updateImg was an inherited method
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
        this.htmlElement.innerHTML = `<div class="pipe"><img src=${PIPES_IMG_PATH}"pipe_curve.png" alt=""></div>`;
        this.img = this.htmlElement.querySelector('.pipe > img');


        this.direction = {
            n: true,
            w: false,
            s: false,
            e: true,
        };
        this.rotate(angle);
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
        this.htmlElement.innerHTML = `<div class="pipe"><img src=${PIPES_IMG_PATH}"pipe_t.png" alt=""></div>`;
        this.img = this.htmlElement.querySelector('.pipe > img');

        this.direction = {
            n: false,
            w: true,
            s: true,
            e: true
        };
        this.rotate(angle);
    }

    updateImg() {
        if (this.active) {
            this.img.src = `${PIPES_IMG_PATH}pipe_t_active.png`;
        } else {
            this.img.src = `${PIPES_IMG_PATH}pipe_t.png`;
        }
    }
}