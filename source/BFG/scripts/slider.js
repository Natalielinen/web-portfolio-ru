let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let slideImg = document.getElementById('slide-img');


let imgUrls = [];

for (let i = 1; i <= 9; i++) {
    imgUrls.push('./img/' + i + '.png')
}
;


let currentImgIndex = 0;

slideImg.src = imgUrls[currentImgIndex];
prevBtn.disabled = true;


let onPrevBtnClick = () => {
    currentImgIndex--;
    slideImg.src = imgUrls[currentImgIndex];
    nextBtn.disabled = false;
    if (currentImgIndex === 0) {
        prevBtn.disabled = true;

    }
};

let onNextBtnClick = () => {
    currentImgIndex++;
    slideImg.src = imgUrls[currentImgIndex];
    prevBtn.disabled = false;
    if (currentImgIndex === (imgUrls.length - 1)) {
        nextBtn.disabled = true;

    }
};


prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);
