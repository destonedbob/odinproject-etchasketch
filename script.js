let gameMat = document.querySelector('.game-mat')
let gameMatHeight = gameMat.clientHeight - parseFloat(getComputedStyle(gameMat).paddingLeft) * 2;
const gridSize = 16;
const GAME_PIXEL_CLASSNAME = "game-pixel"
const ORIGINAL_GAME_PIXEL_COLOR = 'white'
const HOVER_COLOR = 'grey'

function changeColor() {
    this.style.backgroundColor = HOVER_COLOR;
}

function resetColor() {
    this.style.backgroundColor = ORIGINAL_GAME_PIXEL_COLOR;
}

function setUpGamePixels(N=16) {
    for (let i = 0; i < N*N; i++) {
        let div = document.createElement('div');
        div.classList.add(GAME_PIXEL_CLASSNAME)
        div.addEventListener('mouseover', changeColor) // can be easily done with css class though
        div.addEventListener('mouseout', resetColor)
        div.style.height = gameMatHeight / gridSize + 'px';
        div.style.width = gameMatHeight / gridSize + 'px';
        gameMat.appendChild(div);
    }
}

setUpGamePixels()
