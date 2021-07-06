/* Variables */

const textDecorationCheckboxes = document.querySelectorAll('.text-decoration-checkbox'); //for event listener

const textDecorationLineThrough = document.getElementById('text-decoration-line-through');
const textDecorationOverline = document.getElementById('text-decoration-overline');
const textDecorationUnderline = document.getElementById('text-decoration-underline');
const textDecorationAnswer = document.getElementById('text-decoration-answer');

const textDecorationColor = document.getElementById('text-decoration-color');
const textDecorationColorAnswer = document.getElementById('text-decoration-color-answer');

const textDecorationStyle = document.getElementById('text-decoration-style');
const textDecorationStyleAnswer = document.getElementById('text-decoration-style-answer');

/* Functions */

function changeTextDecoration() {

    let lineThrough = textDecorationLineThrough.checked;
    let overline = textDecorationOverline.checked;
    let underline = textDecorationUnderline.checked;

    let textDecorationParams =`${lineThrough ? 'line-through' : ''} ${overline ? 'overline' : ''} ${underline ? 'underline' : ''}`;

    text.style.textDecoration = textDecorationParams;

    textDecorationAnswer.innerHTML = textDecorationParams;

    if (!lineThrough && !overline && !underline) {
        text.style.textDecoration = 'none';
        textDecorationAnswer.innerHTML = 'none';
    };
};

textDecorationColor.oninput = function () {
    text.style.textDecorationColor = textDecorationColor.value;
    textDecorationColorAnswer.innerHTML = textDecorationColor.value;
};

for (let checkbox of textDecorationCheckboxes) {
    checkbox.addEventListener('change', changeTextDecoration);
};

textDecorationStyle.onchange = function () {
    text.style.textDecorationStyle = textDecorationStyle.value;
    textDecorationStyleAnswer.innerHTML = textDecorationStyle.value;
};

//когда добавляешь к выбранному text-decoration какой-то еще, то стиль линии сбрасывается
//поправить