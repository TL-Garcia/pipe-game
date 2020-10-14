const introTheme = new Audio(INTRO_THEME);
const PIPES_IMG_PATH = './img/pipes/';

const progressBarCtx = document.getElementById('progress-bar').getContext('2d');
new Progress(progressBarCtx);

startGameBtn.addEventListener('click', () => {
    introTheme.pause();
    //make opening sound
    //thunder.play();
    openingScreen.remove();
    new Game();
    renderWelcomeScreen();
});

introBtn.addEventListener('click', () => {
    introTheme.play();
    animation.style.display = 'block';
});
