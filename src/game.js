class Game {
	constructor() {
		this.levelNumber = 0;
		this._setLvlSelectorClick();

		this.electricity = new Audio('./sounds/electricity.wav');
		this.fail = new Audio('./sounds/fail.mp3');
		this.gameMusic = new Audio('./sounds/game.mp3');

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
		this.gameMusic.pause();
		this.gameMusic.currentTime = 0;
		this._clearLevel();
		
		if (status === 'fail') {
			this.fail.play();
			renderFailScreen();
		} else {
			//should have a success sound
			this.electricity.play();
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

	// THIS SHOULD BE ELSEWHERE
	_updateTimeBar() {
		const timePercent = Math.round(
			(100 * this.timeRemaining) / this.timeLimit
		);
		timeBar.value = timePercent;
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
		//play music & should be inside startLevel
		this.gameMusic.play();
		//change param for timeLimit
		this.currentLevel = new Level(10000);
		this._checkIfLevelIsFinished();

		gridHTML.style.backgroundImage = "url('./img/tileAqua.png')";

		loadMap[number](this);
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
}
