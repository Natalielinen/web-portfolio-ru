/* Variables */

const square = document.querySelector('.main-content__canvas__square');
const text = document.querySelector('.main-content__canvas__text');

// Page toolbar

const canvasTrigger = document.querySelector('#canvas-trigger');
const figureCanvas = document.querySelector('.figure-canvas');
const textCanvas = document.querySelector('.text-canvas');

// Accordeon

const accordeonItemsTitles = document.querySelectorAll('.accordeon__item__title');
const accordeonItemsContent = document.querySelectorAll('.accordeon__item__content');

/* Functions */

// Choose canvas

function toggleCanvas() {
    figureCanvas.classList.toggle('disabled');
    textCanvas.classList.toggle('disabled');
};
canvasTrigger.addEventListener('change', toggleCanvas);

// Accordeon

for (let item of accordeonItemsTitles) {
    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('disabled');
    });
};

// Manual inputs

function enableManualInput(manualInput) {
    manualInput.previousElementSibling.classList.add('disabled');
    manualInput.classList.remove('disabled');
    manualInput.value = manualInput.previousElementSibling.previousElementSibling.value;
};

function disableManualInput(manualInput) {
    manualInput.classList.add('disabled');
    manualInput.previousElementSibling.classList.remove('disabled');
    manualInput.previousElementSibling.innerHTML = manualInput.value;
    manualInput.previousElementSibling.previousElementSibling.value = manualInput.value;
};


/**** Text customization ****/

//text transform
const textTransform = document.getElementById('text-transform');
const textTransformAnswer = document.getElementById('text-transform-answer');

function transformText() {
    text.style.textTransform = textTransform.value;
    textTransformAnswer.innerHTML = textTransform.value;
};

textTransform.addEventListener('change', transformText);

//подумать как можно переделать этот кусок кода (начало)




