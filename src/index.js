const theme = new Audio('./sounds/theme.mp3');
const thunder = new Audio('./sounds/electricity.wav');

const introBtn = document.getElementById('intro-btn');
const animation = document.getElementById('intro-animation');
const startGameBtn = document.getElementById('start-game-btn');
const openingScreen = document.querySelector('.opening-screen');

startGameBtn.addEventListener('click', () => {
    theme.pause();
    thunder.play();
    openingScreen.remove();
    const game = new Game();
    game.startWelcome();
});

introBtn.addEventListener('click', () => {
    theme.play();
    animation.style.display = 'block';
});