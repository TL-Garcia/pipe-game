const popup = document.getElementById('popup-menu');
const popupTitle = document.querySelector('#popup-menu h3');
const nextBtn = document.querySelector('#next-button');
const tryAgainBtn = document.querySelector('#try-again-button');
const popupButton = document.getElementById('popup-button');
const gridHTML = document.querySelector('.grid');
const timeBar = document.getElementById('time-bar');
const toLevelBtns = document.querySelectorAll('.level-select__btn');

class Game {
	constructor() {
		this.levelNumber = 0;
		this._setLvlSelectorClick();

		this.click = new Audio('./sounds/click.mp3');
		this.electricity = new Audio('./sounds/electricity.wav');
		this.fail = new Audio('./sounds/fail.mp3');
		this.gameMusic = new Audio('./sounds/game.mp3');
	}

	_clearLevel() {
		this._clearClick();
		this.currentLevel = null;
		const squares = document.querySelectorAll('.grid__square');
		squares.forEach((sq) => (sq.innerHTML = ''));
	}

	_setClick() {
		this.timeRemaining = this.timeLimit;
		this.currentLevel.grid.flat().forEach((p) => {
			p &&
				p.element.addEventListener('click', () => {
					this.click.play();
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
        toLevelBtns.forEach(btn => {
            btn.addEventListener('click', () => this._toLevel(btn.value));
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
			this.gameMusic.pause();
			this.gameMusic.currentTime = 0;
			this.electricity.play();
			this._clearLevel();
			clearInterval(this.intervalID);
			popup.style.display = 'block';
			popupTitle.innerText = 'You completed the level';
			nextBtn.innerText = 'NEXT LEVEL';
			nextBtn.style.display = 'inline';
			tryAgainBtn.style.display = 'none';
		}
	}

	_gameOver() {
		this.gameMusic.pause();
		this.gameMusic.currentTime = 0;
		this.fail.play();
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

        this.startLevel(this.levelNumber);
	}

	_updateTimeBar() {
		const timePercent = Math.round(
			(100 * this.timeRemaining) / this.timeLimit
		);
		timeBar.value = timePercent;
	}

	startWelcome() {
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

    startLevel(number) {
        this.gameMusic.play();
        this.currentLevel = new Level();
        this.timeLimit = 100000;
        gridHTML.style.backgroundImage = "url('./img/tileAqua.png')";
        
        loadMap[number](this);

        this._setClick();
		this.currentLevel.changeState(this.currentLevel.start);
		this._setTimer();
		this.currentLevel.updateImgs();
    }
}
