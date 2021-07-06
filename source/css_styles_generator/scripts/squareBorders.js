/* Variables */

const blockBorderRanges = document.querySelectorAll('.block-border-range');
const blockBorderWidth = document.getElementById('block-border-width');
const blockBorderStyle = document.getElementById('block-border-style');
const blockBorderColor = document.getElementById('block-border-color');
const borderManualInput = document.querySelector('.border-manual-input');
const blockBorderAnswer = document.getElementById('block-border-answer');

/* Functions */

function changeAllBorders() {
    let borderParams = `${blockBorderWidth.value}px ${blockBorderStyle.value} ${blockBorderColor.value}`;

    square.style.border = borderParams;
    blockBorderWidth.nextElementSibling.innerHTML = blockBorderWidth.value;
    if (blockBorderWidth.value == 0) {
        blockBorderAnswer.innerHTML = 'none';
    } else {
        blockBorderAnswer.innerHTML = borderParams;
    };
};

blockBorderWidth.addEventListener('input', changeAllBorders);
blockBorderStyle.addEventListener('change', changeAllBorders);
blockBorderColor.addEventListener('input', changeAllBorders);

borderManualInput.previousElementSibling.onclick = function () {
    enableManualInput(borderManualInput);
};

borderManualInput.onblur = function () {
    disableManualInput(borderManualInput);
    changeAllBorders();
};

borderManualInput.addEventListener('keydown', (e) => {
    let key = e.keyCode;
    if (key == 13) {
        disableManualInput(borderManualInput);
        changeAllBorders();
    };
});