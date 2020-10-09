const theme = new Audio('./sounds/theme.mp3');
const thunder = new Audio('./sounds/electricity.wav');

const PIPES_IMG_PATH = './img/pipes/';

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