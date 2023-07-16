let penColorButton = document.querySelector('#changePen');
let currPenColor = 'black';
let otherPenColor = 'rainbow';
let gameMat = document.querySelector('.game-mat');
let gameMatHeight = gameMat.clientHeight - parseFloat(getComputedStyle(gameMat).paddingLeft) * 2;
const GAME_PIXEL_CLASSNAME = "game-pixel";
const ORIGINAL_GAME_PIXEL_COLOR = 'white';
const HOVER_COLOR = 'grey';
let draw_mode = false;

function hoverColor() {
    this.classList.add('hover');
}

function resetColor() {
    this.classList.remove('hover');
}

function setdrawMode(bool) {
    draw_mode = bool;
}

function draw() {
    if (this.classList.contains('drawn')) {
        return;
    }
    if (draw_mode === true) {
        this.classList.add('drawn');
        if (currPenColor == 'black') {
            this.style.backgroundColor = 'black';
        } else {
            let r = Math.random() * 255
            let g = Math.random() * 255
            let b = Math.random() * 255
            this.style.backgroundColor = `rgb(${r},${g},${b})`
        }
    }
}

function setUpGamePixels(gridSize=16) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        let div = document.createElement('div');
        div.classList.add(GAME_PIXEL_CLASSNAME);
        div.addEventListener('mouseover', hoverColor); // can be easily done with css class though
        div.addEventListener('mouseout', resetColor);
        div.addEventListener('mousedown', () => setdrawMode(true));
        div.addEventListener('mousemove', draw);
        window.addEventListener('mouseup', () => setdrawMode(false));
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
    let numPixelsToSet = askUserForPixelSize();
    if (numPixelsToSet === null) {
        return;
    }

    // delete previous game pixels
    deleteExistingPixels();

    // set new game pixels
    setUpGamePixels(numPixelsToSet);
}

function changePen() {
    [currPenColor, otherPenColor] = [otherPenColor, currPenColor];
    penColorButton.textContent = `Toggle pen color to ${currPenColor}`;
}

setUpGamePixels()
