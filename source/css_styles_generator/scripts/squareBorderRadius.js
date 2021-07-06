/* Variables */

//inputs

const topLeftRange = document.getElementById('top-left-radius');
const topRightRange = document.getElementById('top-right-radius');
const bottomRightRange = document.getElementById('bottom-right-radius');
const bottomLeftRange = document.getElementById('bottom-left-radius');
const allRadiusInputs = document.querySelectorAll('.square-border-radius');
const manualRadiusInputs = document.querySelectorAll('.manual-radius-inputs');

//span-answer

const borderRadiusAnswer = document.getElementById('square-border-radius');

/* Functions */

function changeRadius() {
    for (let elem of allRadiusInputs) {
        elem.nextElementSibling.innerHTML = elem.value;
    };

    let topLeft = topLeftRange.value;
    let topRight = topRightRange.value;
    let bottomRight = bottomRightRange.value;
    let bottomLeft  = bottomLeftRange.value;

    let borderRadiusParams = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

    square.style.borderRadius = borderRadiusParams;

    borderRadiusAnswer.innerHTML = borderRadiusParams;

    if (topLeft == topRight && topLeft == bottomRight && topLeft == bottomLeft) {
        borderRadiusAnswer.innerHTML = `${topLeft}px`;
    };

};

for (let elem of allRadiusInputs) {
    elem.addEventListener('input', changeRadius);
};

for (let elem of manualRadiusInputs) {
    elem.previousElementSibling.onclick = function () {
        enableManualInput(elem);
    };
};

for (let elem of manualRadiusInputs) {
    elem.onblur = function () {
        disableManualInput(elem)
        changeRadius();
    };

    elem.addEventListener('keydown', (e) => {
        let key = e.keyCode;
        if (key == 13) {
            disableManualInput(elem);
            changeRadius();
        };
    });
};