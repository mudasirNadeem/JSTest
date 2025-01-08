
var firstElement = document.getElementById('first-element');
// var secondElement = document.getElementById('twoElement');
// var thredElement = document.getElementById('threeElement');
// var thredElement = document.getElementById('fourElement');
var sumOfValue = 0 ;
function arrowUp() {
    // console.log('sumOfValue:', sumOfValue);
    if (sumOfValue == 0) {
        firstElement.style.marginTop = '-100vh';
        console.log('Moved #first-element up');
        sumOfValue++;
    } else {
        firstElement.style.marginTop = '0px';
        console.log('Reset #first-element');
    }
}