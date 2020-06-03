class Pipe {
    constructor(posX, posY, angle) {
        this.x = posX;
        this.y = posY;
        this.direction = {
            n: false,
            s: false,
            w: false,
            e: false
        };

        this.element = document.querySelector(`.square.x${this.x}y${this.y} div`)

        /*Would be nice to limit input angle to 0-270*/
        this.angle = angle;

        this.active = false;

        this._setClick();
    }

    _setClick() {
        this.element.addEventListener('click', () => {
            this.rotate();
            console.log('rotating!')
        })
    }

    rotate() {
        this.angle += 90;
        if (this.angle === 360) this.angle = 0;

        this.element.style.transform = `rotate(${this.angle}deg)`;
    }

    _isActive() {

    }
}