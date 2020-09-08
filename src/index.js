const theme = new Audio('./sounds/theme.mp3');
const introBtn = document.getElementById('intro-button');
const animation = document.getElementById('intro-animation');

const menuBtn = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    const game = new Game();
    game.startLevel0();
})

introBtn.addEventListener('click', () => {
    theme.play();
    animation.style.display = 'block';
});