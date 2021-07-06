/* Variables */

//Square background-color

const squareColor = document.getElementById('square-color');
const answerColor = document.getElementById('background-color');

//Square opacity

const opacityRange = document.querySelector('#square-opacity');
const opacityRangeSpan = document.querySelector('#square-opacity+span');
const squareAnswerOpacitySpan = document.getElementById('answer-square-opacity');

//Square size

const squareWidthInput = document.getElementById('square-width');
const squareHeightInput = document.getElementById('square-height');
const squareAnswerWidthSpan = document.getElementById('answer-square-width');
const squareAnswerHeightSpan = document.getElementById('answer-square-height');

/* Functions */

// Square color 

squareColor.oninput = function () {
    square.style.backgroundColor = squareColor.value;
    answerColor.innerHTML = squareColor.value;
};

// Square opacity 

opacityRange.oninput = function () {
    square.style.opacity = opacityRange.value;
    opacityRangeSpan.innerHTML = opacityRange.value;
    squareAnswerOpacitySpan.innerHTML = opacityRange.value;
};

// Square size

squareWidthInput.oninput = function () {
    square.style.width = `${squareWidthInput.value}px`;
    squareAnswerWidthSpan.innerHTML = squareWidthInput.value;
};

squareHeightInput.oninput = function () {
    square.style.height = `${squareHeightInput.value}px`;
    squareAnswerHeightSpan.innerHTML = squareHeightInput.value;
};