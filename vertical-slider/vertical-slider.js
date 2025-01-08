var firstElement = document.getElementById('first-element');
var secondElement = document.getElementById('twoElement');
var thirdElement = document.getElementById('threeElement');
var fourthElement = document.getElementById('fourthElement');
var sumOfValue = 0;
function updateSliderPosition() {
    firstElement.style.marginTop = sumOfValue >= 1 ? '-100vh' : '0vh';
    firstElement.style.transition = sumOfValue >= 1 ? '1s' : '1s';
    secondElement.style.marginTop = sumOfValue >= 2 ? '-100vh' : '0vh';
    secondElement.style.transition = sumOfValue >= 1 ? '1s' : '1s';
    thirdElement.style.marginTop = sumOfValue >= 3 ? '-100vh' : '0vh';
    thirdElement.style.transition = sumOfValue >= 1 ? '1s' : '1s';
}

function arrowUp() {
    if (sumOfValue < 3) {
        sumOfValue++;
    } else {
        sumOfValue = 0;
        firstElement.style.marginTop = '0vh';
        secondElement.style.marginTop = '0vh';
        thirdElement.style.marginTop = '0vh';
    }
    updateSliderPosition();
}

function arrowDown() {
    if (sumOfValue > 0) {
        sumOfValue--;
    } else {
        sumOfValue = 3;
        firstElement.style.marginTop = '-300vh';
        firstElement.style.transition = '1s';
        secondElement.style.marginTop = '0vh';
        secondElement.style.transition = '1s';
        thirdElement.style.marginTop = '0vh';
        thirdElement.style.transition = '1s';


    }
    updateSliderPosition();
}