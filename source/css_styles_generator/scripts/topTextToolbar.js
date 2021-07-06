/* Variables */

// Text color
const textColor = document.getElementById('text-color');
const textColorAnswer = document.getElementById('text-color-answer');

//Font size
const fontSize = document.getElementById('font-size');
const fontSizeAnswer = document.getElementById('font-size-answer');

//Font style
const fontStyle = document.getElementById('font-style');
const fontStyleAnswer = document.getElementById('font-style-answer');

//Font weight
const fontWeight = document.getElementById('font-weight');
const fontWeightAnswer = document.getElementById('font-weight-answer');

/* Functions */

// Text color
textColor.oninput = function() {
    text.style.color = textColor.value;
    textColorAnswer.innerHTML = textColor.value;
};

//Font size
fontSize.oninput = function () {
    text.style.fontSize = fontSize.value + 'px';
    fontSizeAnswer.innerHTML = fontSize.value;
};

//Font style
fontStyle.oninput = function () {
    text.style.fontStyle = fontStyle.value;
    fontStyleAnswer.innerHTML = fontStyle.value;
};

//Font weight
fontWeight.oninput = function () {
    text.style.fontWeight = fontWeight.value;
    fontWeightAnswer.innerHTML = fontWeight.value;
};