const popup = document.getElementById('popup-menu');
const popupTitle = document.querySelector('#popup-menu h3')
const popupBtn = document.querySelector('#popup-menu button')
const popupButton = document.getElementById('popup-button');
const gridHTML = document.querySelector('.grid')

class Game {
    constructor() {
        this.currentLevel;
        this.timeRemaining;
        this.intervalID;
    }

    _clearLevel() {
        this._clearClick();
        this.currentLevel = null;
        const squares = document.querySelectorAll('.square');
        squares.forEach(sq => sq.innerHTML = '');
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

    _clearClick() {
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
            this._clearLevel();
            popup.style.display = 'block';
            popupTitle.innerText = 'You completed the level';
            popupButton.innerText = 'NEXT LEVEL';
            clearInterval(this.intervalID);
        }
    }

    _gameOver() {
        game._clearLevel();
        popup.style.display = 'block';
        popupTitle.innerText = 'You have failed';
        popupBtn.innerText = 'TRY AGAIN';
    }

    startLevel0() {
        gridHTML.style.backgroundImage = "url('./img/tileMetal.png')";
        popup.style.display = 'block';
        popupTitle.innerText = 'Welcome to the pipe game';
        popupBtn.innerText = 'START GAME';

        popupButton.addEventListener('click', () => {
            popup.style.display = 'none';
            game._startLevel2();
        });
    }

    _startLevel1() {
        this.currentLevel = new Level();
        gridHTML.style.backgroundImage = "url('./img/tileAqua.png')";

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

        this.currentLevel.setStart(0, 0);
        this.currentLevel.setEnd(5, 4);

        this.currentLevel.unifyGrid();
        this._setClick();
        this._setTimer(2000);
    }

    _startLevel2() {
        this.currentLevel = new Level();
        gridHTML.style.backgroundImage = "url('./img/tileAqua.png')";

        this.currentLevel.addPipe(0, 1, 0);
        this.currentLevel.addT(1, 1, 0);
        this.currentLevel.addCurve(1, 0, 0);
        this.currentLevel.addPipe(2, 0, 0);
        this.currentLevel.addCurve(3, 0, 0);
        this.currentLevel.addPipe(3, 1, 0);
        this.currentLevel.addPipe(3, 2, 0);
        this.currentLevel.addCurve(4, 2, 0);
        this.currentLevel.addCurve(4, 1, 0);
        this.currentLevel.addPipe(5, 2, 0);

        this.currentLevel.addPipe(1, 2, 0);
        this.currentLevel.addCurve(1, 3, 0);
        this.currentLevel.addCurve(0, 3, 0);
        this.currentLevel.addPipe(0, 4, 0);
        this.currentLevel.addCurve(0, 5, 0);
        this.currentLevel.addPipe(1, 5, 0);
        this.currentLevel.addCurve(2, 5, 0);
        this.currentLevel.addPipe(2, 4, 0);
        this.currentLevel.addCurve(2, 3, 0);
        this.currentLevel.addPipe(3, 3, 0);
        this.currentLevel.addPipe(4, 3, 0);
        this.currentLevel.addCurve(5, 3, 0);
        this.currentLevel.addCurve(5, 4, 0);

        this.currentLevel.setStart(0, 1);
        this.currentLevel.setEnd(5, 4);

        this.currentLevel.unifyGrid();
        this._setClick();
        this._setTimer(4000);
    }
}