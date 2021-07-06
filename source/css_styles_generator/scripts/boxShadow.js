/* Variables */

const insetShadowCheckbox = document.getElementById('inset-box-shadow');

const boxShadowOffsetX = document.getElementById('box-shadow-offset-x');
const boxShadowOffsetY = document.getElementById('box-shadow-offset-y');
const boxShadowBlur = document.getElementById('box-shadow-blur');
const boxShadowSpread = document.getElementById('box-shadow-spread');
const boxShadowColor = document.getElementById('box-shadow-color');
const boxShadowInputs = document.querySelectorAll('.box-shadow-input');

const shadowManualInputs = document.querySelectorAll('.shadow-manual-inputs');

const boxShadowAnswer = document.getElementById('box-shadow-answer');

/* Functions */

function changeBoxShadow() {

    for (let elem of boxShadowInputs) {
        elem.nextElementSibling.innerHTML = elem.value;
    };

    let offsetX = boxShadowOffsetX.value;
    let offsetY = boxShadowOffsetY.value;
    let blur = boxShadowBlur.value;
    let spread = boxShadowSpread.value;
    let shadowColor = boxShadowColor.value;

    let shadowParams = `${insetShadowCheckbox.checked  ? 'inset' : ''} ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${shadowColor}`;

    boxShadowAnswer.innerHTML = shadowParams;

    square.style.boxShadow = shadowParams;

    if (offsetX == 0 && offsetY == 0 && blur == 0 && spread == 0) {
        boxShadowAnswer.innerHTML = 'none';
    };
};

for (let input of boxShadowInputs) {
    input.addEventListener('input', changeBoxShadow);
};

boxShadowColor.addEventListener('input', changeBoxShadow);
insetShadowCheckbox.addEventListener('change', changeBoxShadow);

for (let elem of shadowManualInputs) {
    elem.previousElementSibling.onclick = function () {
        enableManualInput(elem);
    };
};

for (let elem of shadowManualInputs) {
    elem.onblur = function () {
        disableManualInput(elem);
        changeBoxShadow();
    };

    elem.addEventListener('keydown', (e) => {
        let key = e.keyCode;
        if (key == 13) {
            disableManualInput(elem);
            changeBoxShadow();
        };
    });
};