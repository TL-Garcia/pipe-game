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

        /*Would be nice to limit input angle to 0-270*/
        this.angle = angle;

        this.active = false;
    }

    rotate() {
        this.angle += 90;
        if (this.angle === 360) this.angle = 0;
    }

    _isActive() {

    }
}