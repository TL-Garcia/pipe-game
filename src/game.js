const popup = document.getElementById('popup-menu');
const popupTitle = document.querySelector('#popup-menu h3');
const nextBtn = document.querySelector('#next-button');
const tryAgainBtn = document.querySelector('#try-again-button');
const popupButton = document.getElementById('popup-button');
const gridHTML = document.querySelector('.grid');
const timeBar = document.getElementById('time-bar');
const lvl1Btn = document.getElementById('Lv1-btn');
const lvl2Btn = document.getElementById('Lv2-btn');
const lvl3Btn = document.getElementById('Lv3-btn');
const lvl4Btn = document.getElementById('Lv4-btn');
const lvl5Btn = document.getElementById('Lv5-btn');

class Game {
    constructor() {
        this.currentLevel;
        this.timeLimit;
        this.intervalID;
        this.levelNumber = 0;
        this._setLvlSelectorClick();
    }

    _clearLevel() {
        this._clearClick();
        this.currentLevel = null;
        const squares = document.querySelectorAll('.square');
        squares.forEach(sq => sq.innerHTML = '');
    }

    _setClick() {
        this.timeRemaining = this.timeLimit;
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

    _setLvlSelectorClick() {
        lvl1Btn.addEventListener('click', () => {
            this._toLevel(1);
        });

        lvl2Btn.addEventListener('click', () => {
            this._toLevel(2);
        });

        lvl3Btn.addEventListener('click', () => {
            this._toLevel(3);
        });

        lvl4Btn.addEventListener('click', () => {
            this._toLevel(4);
        });

        lvl5Btn.addEventListener('click', () => {
            this._toLevel(5);
        });
    }

    _clearClick() {
        // NEEDS TO REFERENCE CLICK EVENT BY NAME
    }

    _setTimer() {
        this.intervalID = setInterval(() => {
            this.timeRemaining--;
            this._updateTimeBar();
            if (this.timeRemaining <= 0) {
                this._gameOver();
                clearInterval(this.intervalID);
            }
        }, 1);
    }

    _levelComplete() {
        if (this.currentLevel.end.active && this.currentLevel.end.direction.e) {
            this._clearLevel();
            clearInterval(this.intervalID);
            popup.style.display = 'block';
            popupTitle.innerText = 'You completed the level';
            nextBtn.innerText = 'NEXT LEVEL'
            nextBtn.style.display = 'inline';
            tryAgainBtn.style.display = 'none';
        }
    }

    _gameOver() {
        game._clearLevel();
        popup.style.display = 'block';
        popupTitle.innerText = 'You have failed';
        nextBtn.style.display = 'none';
        tryAgainBtn.style.display = 'inline';
    }

    _toLevel(level) {
        this._clearLevel();
        this.levelNumber = level;
        clearInterval(this.intervalID);
        popup.style.display = 'none';

        switch (this.levelNumber) {
            case 1:
                this._startLevel1();
                break;
            case 2:
                this._startLevel2();
                break;
            case 3:
                this._startLevel3();
                break;
            case 4:
                this._startLevel4();
                break;
            case 5:
                this._startLevel5();
                break;
        }
    }

    _updateTimeBar() {
        const timePercent = Math.round(100 * this.timeRemaining / this.timeLimit);
        timeBar.value = timePercent;
    }

    startLevel0() {
        gridHTML.style.backgroundImage = "url('./img/tileMetal.png')";
        popup.style.display = 'block';
        popupTitle.innerText = 'Welcome to the pipe game';
        nextBtn.style.display = 'inline';
        nextBtn.innerText = 'START GAME';
        tryAgainBtn.style.display = 'none';

        nextBtn.addEventListener('click', () => {
            this.levelNumber++;
            this._toLevel(this.levelNumber);
        });

        tryAgainBtn.addEventListener('click', () => {
            this._toLevel(this.levelNumber);
        });

    }

    _startLevel1() {
        this.currentLevel = new Level();
        this.timeLimit = 3000;
        gridHTML.style.backgroundImage = "url('./img/tileAqua.png')";

        this.currentLevel.addPipe(0, 1, 90);
        this.currentLevel.addCurve(1, 1, 90);
        this.currentLevel.addCurve(1, 2, 270);
        this.currentLevel.addT(2, 2, 0);
        this.currentLevel.addPipe(3, 2, 0);
        this.currentLevel.addPipe(4, 2, 0);
        this.currentLevel.addCurve(5, 2, 0);
        this.currentLevel.addPipe(5, 3, 0);
        this.currentLevel.addCurve(5, 4, 0);

        this.currentLevel.setStart(0, 1);
        this.currentLevel.setEnd(5, 4);

        this.currentLevel.unifyGrid();
        this._setClick();
        this._setTimer();
        this.currentLevel.updateImgs();
    }

    _startLevel2() {
        this.currentLevel = new Level();
        this.timeLimit = 4000;
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
        this.currentLevel.changeState(this.currentLevel.start);
        this._setTimer();

        this.currentLevel.updateImgs();
    }
}