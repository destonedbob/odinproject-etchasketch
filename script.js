let gameMat = document.querySelector('.game-mat')
let gameMatHeight = gameMat.clientHeight - parseFloat(getComputedStyle(gameMat).paddingLeft) * 2;
const gridSize = 16;
const GAME_PIXEL_CLASSNAME = "game-pixel"


function setUpGamePixels(N=16) {
    for (let i = 0; i < N*N; i++) {
        let div = document.createElement('div');
        div.classList.add(GAME_PIXEL_CLASSNAME)
        div.style.height = gameMatHeight / gridSize + 'px';
        div.style.width = gameMatHeight / gridSize + 'px';
        gameMat.appendChild(div);
    }
}

setUpGamePixels()
