/* Variables */

const blockOutlineColor = document.getElementById('block-outline-color');
const blockOutlineStyle = document.getElementById('block-outline-style');
const blockOutlineWidth = document.getElementById('block-outline-width');
const blockOutlineAnswer = document.getElementById('block-outline-answer');
const outlineManualInput = document.querySelector('.outline-manual-input');

/* Functions */

function changeOutline() {
    blockOutlineWidth.nextElementSibling.innerHTML = blockOutlineWidth.value;
    let outlineParams = `${blockOutlineWidth.value}px ${blockOutlineStyle.value} ${blockOutlineColor.value}`;
    square.style.outline = outlineParams;
    if (blockOutlineWidth.value == 0) {
        blockOutlineAnswer.innerHTML = 'none';
    } else {
        blockOutlineAnswer.innerHTML = outlineParams;
    };
};

blockOutlineColor.addEventListener('input', changeOutline);
blockOutlineStyle.addEventListener('change', changeOutline);
blockOutlineWidth.addEventListener('input', changeOutline);

outlineManualInput.previousElementSibling.onclick = function () {
    enableManualInput(outlineManualInput);
};

outlineManualInput.onblur = function () {
    disableManualInput(outlineManualInput);
    changeOutline();
};

outlineManualInput.addEventListener('keydown', (e) => {
    let key = e.keyCode;
    if (key == 13) {
        disableManualInput(outlineManualInput);
        changeOutline();
    };
});