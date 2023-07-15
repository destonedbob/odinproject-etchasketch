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

function askUserForPixelSize() {

    let userInput = prompt("How many pixels per side do you want?");

    // check if cancel button press
    if (userInput === null) {
        return null;
    }

    // check if user input is a valid number
    while (isNaN(userInput) || (userInput < 1 || userInput > 100)) {
        userInput = prompt("Invalid input. Please enter a value between 1 and 100.");
        console.log(userInput)
        if (userInput === null) {
            return null;
        }
    }

    return Number.parseInt(userInput);
}

function deleteExistingPixels() {
    let existingPixels = document.querySelectorAll('.' + GAME_PIXEL_CLASSNAME);
    existingPixels.forEach(pixel => {
        pixel.remove();
    })
}

function setPixels() {
    // Ask user for number of pixels per side.
    // let numPixelsToSet = askUserForPixelSize();

    // delete previous game pixels
    deleteExistingPixels()

    // set new game pixels
}

setUpGamePixels()
