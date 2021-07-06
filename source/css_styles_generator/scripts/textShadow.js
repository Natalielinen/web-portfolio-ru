/* Variables */

const textShadowColor = document.getElementById('text-shadow-color');
const textShadowOffsetX = document.getElementById('text-shadow-offset-x');
const textShadowOffsetY = document.getElementById('text-shadow-offset-y');
const textShadowBlur = document.getElementById('text-shadow-blur');

const textShadowInputs = document.querySelectorAll('.text-shadow-input');
const textShadowManualInputs = document.querySelectorAll('.text-shadow-manual-input')

const textShadowAnswer = document.getElementById('text-shadow-answer');

/* Functions */

function changeTextShadow() {
    let offsetX = textShadowOffsetX.value;
    let offsetY = textShadowOffsetY.value;
    let blur = textShadowBlur.value;
    let shadowColor = textShadowColor.value;

    for (let input of textShadowInputs) {
        input.nextElementSibling.innerHTML = input.value;
    };
    let textShadowParams = `${offsetX}px ${offsetY}px ${blur}px ${shadowColor}`;

    text.style.textShadow = textShadowParams;
    textShadowAnswer.innerHTML = textShadowParams;
};

for (let input of textShadowInputs) {
    input.addEventListener('input', changeTextShadow);
};

textShadowColor.addEventListener('input', changeTextShadow);

for (let elem of textShadowManualInputs) {
    elem.previousElementSibling.onclick = function () {
        enableManualInput(elem);
    };
};

for (let elem of textShadowManualInputs) {
    elem.onblur = function () {
        disableManualInput(elem)
        changeTextShadow();
    };

    elem.addEventListener('keydown', (e) => {
        let key = e.keyCode;
        if (key == 13) {
            disableManualInput(elem);
            changeTextShadow();
        };
    });
};