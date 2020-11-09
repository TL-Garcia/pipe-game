class Game {
	constructor() {
		this.levelNumber = 0;
		this._setLvlSelectorClick();

		this.failSound = new Audio(FAIL_SOUND);
		this.successSound = new Audio(SUCCESS_SOUND);
		this.levelTheme = new Audio(LEVEL_THEME);

		this.handleClicks();
	}

	_clearLevel() {
		this._clearClick();
		this.currentLevel = null;
		const squares = document.querySelectorAll('.grid__square');
		squares.forEach((sq) => (sq.innerHTML = ''));
	}

	_setLvlSelectorClick() {
		toLevelBtns.forEach((btn) => {
			btn.addEventListener('click', () => this._toLevel(btn.value));
		});
	}

	_clearClick() {
		// NEEDS TO REFERENCE CLICK EVENT BY NAME
	}

	_endLevel(status) {
		this._stopLevelTheme();
		this._clearLevel();

		if (status === 'fail') {
			this.failSound.play();
			renderFailScreen();
		} else {
			this.successSound.play();
			renderPassScreen();
		}
	}

	_toLevel(level) {
		this._clearLevel();
		this.levelNumber = level;
		clearInterval(this.intervalID);
		popup.style.display = 'none';

		this.loadLevel(this.levelNumber);
	}

	handleClicks() {
		nextBtn.addEventListener('click', () => {
			this.levelNumber++;
			this._toLevel(this.levelNumber);
		});

		startBtn.addEventListener('click', () => {
			this._toLevel(1);
		});

		tryAgainBtn.addEventListener('click', () => {
			this._toLevel(this.levelNumber);
		});
	}

	loadLevel(number) {
		//change param for timeLimit
		this.currentLevel = new Level(10000);
		this._checkIfLevelIsFinished();

		gridHTML.style.backgroundImage = "url('./img/tileAqua.png')";

		loadMap[number](this);
		this.levelTheme.play();
		this.currentLevel.startLevel();
	}

	_checkIfLevelIsFinished() {
		const intervalId = setInterval(() => {
			if (this.currentLevel.levelStatus) {
				clearInterval(intervalId);
				const status = this.currentLevel.levelStatus;
				this._endLevel(status);
			}
		}, 1);
	}

	_stopLevelTheme() {
		this.levelTheme.pause();
		this.levelTheme.currentTime = 0;
	}
}
