class Game {
    constructor() {
        this.currentLevel;
        this.timeRemaining;
        this.intervalID;
    }

    _setClick() {
        this.currentLevel.unifiedGrid.forEach(p => {
            p && p.element.addEventListener('click', () => {
                p.angle += 90;
                p.rotate();
                this.currentLevel.changeState(p);
                this.currentLevel.updateImgs();
                setTimeout(() => {
                    this._levelComplete();
                }, 50);
            });
        });
    }

    _setTimer(timeLimit) {
        this.intervalID = setInterval(() => {
            this.timeRemaining = timeLimit--;
            if (this.timeRemaining <= 0) {
                this._gameOver();
                clearInterval(this.intervalID);
            }
        }, 1);
    }

    _levelComplete() {
        if (this.currentLevel.end.active && this.currentLevel.end.direction.e) {
            alert('LEVEL COMPLETED');
            clearInterval(this.intervalID);
        }
    }

    _gameOver() {
        alert('GAME OVER')
    }

    startLevel1() {
        this.currentLevel = new Level();

        this.currentLevel.addPipe(0, 0, 90);
        this.currentLevel.addCurve(0, 1, 0);
        this.currentLevel.addCurve(1, 1, 90);
        this.currentLevel.addCurve(1, 2, 270);
        this.currentLevel.addT(2, 2, 0);
        this.currentLevel.addPipe(3, 2, 0);
        this.currentLevel.addPipe(4, 2, 0);
        this.currentLevel.addCurve(5, 2, 0);
        this.currentLevel.addPipe(5, 3, 0);
        this.currentLevel.addCurve(5, 4, 0);

        this.currentLevel.setStart(0,0);
        this.currentLevel.setEnd(5, 4);

        this.currentLevel.unifyGrid();
        this._setClick();
        this._setTimer(2000);
    }
}