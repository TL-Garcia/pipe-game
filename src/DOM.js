const popup = document.getElementById('popup-menu');
const popupButton = document.getElementById('popup-button');
const popupTitle = document.querySelector('#popup-menu h3');

const nextBtn = document.querySelector('#next-button');
const startBtn = document.querySelector('#start-button');
const tryAgainBtn = document.querySelector('#try-again-button');
const startGameBtn = document.getElementById('start-game-btn');
const toLevelBtns = document.querySelectorAll('.level-select__btn');

const gridHTML = document.querySelector('.grid');
const progressBarCtx = document.getElementById('progress-bar').getContext('2d');

const introBtn = document.getElementById('intro-btn');
const animation = document.getElementById('intro-animation');
const openingScreen = document.querySelector('.opening-screen');

function renderPassScreen() {
	popup.style.display = 'block';
	popupTitle.innerText = 'You completed the level';
	nextBtn.style.display = 'inline';
    tryAgainBtn.style.display = 'none';
	startBtn.style.display = 'none';
}

function renderFailScreen() {
	popup.style.display = 'block';
	popupTitle.innerText = 'You have failed';
	nextBtn.style.display = 'none';
	tryAgainBtn.style.display = 'inline';
	startBtn.style.display = 'none';
}

function renderWelcomeScreen() {
	gridHTML.style.backgroundImage = "url('./img/tileMetal.png')";
	popup.style.display = 'block';
	popupTitle.innerText = 'Welcome to the pipe game';
	startBtn.style.display = 'inline';
    tryAgainBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}
