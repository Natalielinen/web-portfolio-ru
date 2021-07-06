const topTextBorder = document.getElementById('top-text-border');
const topTextBorderStyle = document.getElementById('top-text-border-style');
const topTextBorderColor = document.getElementById('text-border-color');

const rightTextBorder = document.getElementById('right-text-border');
const rightTextBorderStyle = document.getElementById('right-text-border-style');
const rightTextBorderColor = document.getElementById('right-text-border-color');


const bottomTextBorder = document.getElementById('bottom-text-border');
const bottomTextBorderStyle = document.getElementById('bottom-text-border-style');
const bottomTextBorderColor = document.getElementById('bottom-text-border-color');

const leftTextBorder = document.getElementById('left-text-border');
const leftTextBorderStyle = document.getElementById('left-text-border-style');
const leftTextBorderColor = document.getElementById('left-text-border-color');

const textBorderInputs = document.querySelectorAll('.text-border');

const manualTextBorderInputs = document.querySelectorAll('.text-border-manual-input');

const allTextBordersAnswer = document.getElementById('all-text-borders-answer');
const topTextBorderAnswer = document.getElementById('top-text-borders-answer');
const rightTextBorderAnswer = document.getElementById('right-text-borders-answer');
const bottomTextBorderAnswer = document.getElementById('bottom-text-borders-answer');
const leftTextBorderAnswer = document.getElementById('left-text-borders-answer');

const topTextBordersAnswerCont = document.getElementById('top-text-border-answer-cont');
const rightTextBordersAnswerCont = document.getElementById('right-text-border-answer-cont');
const bottomTextBordersAnswerCont = document.getElementById('bottom-text-border-answer-cont');
const leftTextBordersAnswerCont = document.getElementById('left-text-border-answer-cont');
const allTextBordersAnswerCont = document.getElementById('all-text-borders-answer-cont');

/* Functions */
//---------------------------------------------------------------------------------------------
for (let input of textBorderInputs) {
    input.oninput = function () {
        input.nextElementSibling.innerHTML = input.value;
    };
};

function changeTextBorders(input, style, color) {
    return `${input.value}px ${style.value} ${color.value}`;
};

function getAnswer (answerCont, answer, border, borderStyle, borderColor) {
    let textBorderAnswersContainers = [
        topTextBordersAnswerCont,
        rightTextBordersAnswerCont,
        bottomTextBordersAnswerCont,
        leftTextBordersAnswerCont
    ];

    allTextBordersAnswerCont.classList.add('disabled');
    answerCont.classList.remove('disabled');
    answer.innerHTML = `${border.value}px ${borderStyle.value} ${borderColor.value}`;
    if(topTextBorder.value == 0 && rightTextBorder.value == 0 && bottomTextBorder.value == 0 && leftTextBorder.value == 0) {
        for(let borderCont of textBorderAnswersContainers) {
            borderCont.classList.add('disabled');
        };
        allTextBordersAnswerCont.classList.remove('disabled');
    }; 

    if(
        topTextBorder.value ==  rightTextBorder.value &&
        topTextBorder.value ==  bottomTextBorder.value &&
        topTextBorder.value ==  leftTextBorder.value &&
        topTextBorderStyle.value == rightTextBorderStyle.value &&
        topTextBorderStyle.value == bottomTextBorderStyle.value &&
        topTextBorderStyle.value == leftTextBorderStyle.value &&
        topTextBorderColor.value == rightTextBorderColor.value &&
        topTextBorderColor.value == bottomTextBorderColor.value &&
        topTextBorderColor.value == leftTextBorderColor.value
    ) {
        for(let borderCont of textBorderAnswersContainers) {
            borderCont.classList.add('disabled');
        };
        allTextBordersAnswerCont.classList.remove('disabled');
        allTextBordersAnswer.innerHTML = `${topTextBorder.value}px ${topTextBorderStyle.value} ${topTextBorderColor.value}`;
    } else {
        allTextBordersAnswerCont.classList.add('disabled');
        for(let borderCont of textBorderAnswersContainers) {
            borderCont.classList.remove('disabled');
        };
        
    }
};

function changeTopTextBorder() {
    text.style.borderTop = changeTextBorders(topTextBorder, topTextBorderStyle, topTextBorderColor);
    getAnswer(topTextBordersAnswerCont, topTextBorderAnswer, topTextBorder, topTextBorderStyle, topTextBorderColor);
};
topTextBorder.addEventListener('input', changeTopTextBorder);
topTextBorderStyle.addEventListener('change', changeTopTextBorder);
topTextBorderColor.addEventListener('input', changeTopTextBorder);

function changeRightTextBorder() {
    text.style.borderRight = changeTextBorders(rightTextBorder, rightTextBorderStyle, rightTextBorderColor);
    getAnswer(rightTextBordersAnswerCont, rightTextBorderAnswer, rightTextBorder, rightTextBorderStyle, rightTextBorderColor);
};
rightTextBorder.addEventListener('input', changeRightTextBorder);
rightTextBorderStyle.addEventListener('change', changeRightTextBorder);
rightTextBorderColor.addEventListener('input', changeRightTextBorder);

function changeBottomTextBorder() {
    text.style.borderBottom = changeTextBorders(bottomTextBorder, bottomTextBorderStyle, bottomTextBorderColor);
    getAnswer(bottomTextBordersAnswerCont, bottomTextBorderAnswer, bottomTextBorder, bottomTextBorderStyle, bottomTextBorderColor);
};
bottomTextBorder.addEventListener('input', changeBottomTextBorder);
bottomTextBorderStyle.addEventListener('change', changeBottomTextBorder);
bottomTextBorderColor.addEventListener('input', changeBottomTextBorder);

function changeLeftTextBorder() {
    text.style.borderLeft = changeTextBorders(leftTextBorder, leftTextBorderStyle, leftTextBorderColor);
    getAnswer(leftTextBordersAnswerCont, leftTextBorderAnswer, leftTextBorder, leftTextBorderStyle, leftTextBorderColor);
};
leftTextBorder.addEventListener('input', changeLeftTextBorder);
leftTextBorderStyle.addEventListener('change', changeLeftTextBorder);
leftTextBorderColor.addEventListener('input', changeLeftTextBorder);

//----------------------------------------------------------------------------------------

for (let elem of manualTextBorderInputs) {
    elem.previousElementSibling.onclick = function () {
        enableManualInput(elem);
    };
};

for (let elem of manualTextBorderInputs) {
    elem.onblur = function () {
        disableManualInput(elem)
        changeTopTextBorder();
        changeRightTextBorder();
        changeBottomTextBorder();
        changeLeftTextBorder(); 
    };

    elem.addEventListener('keydown', (e) => {
        let key = e.keyCode;
        if (key == 13) {
            disableManualInput(elem);
            changeTextShadow();
        };
    });
};