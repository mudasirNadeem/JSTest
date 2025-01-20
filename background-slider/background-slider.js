var imageContainer = document.getElementById('imageContainer');
var cardImage  = document.getElementById('cardImage');
var index = 0;
function arrowRight(){
    index < 3 ? index++ : index = 0;
if(index == 0){
    imageContainer.className = 'container-fluid min-vh-100 d-flex align-items-center justify-content-center image-1'
    cardImage.className = 'image-1'

}
    else if(index == 1){
        imageContainer.classList.add('image-2');
        cardImage.classList.add('image-2')
    }
    else if(index == 2){
        imageContainer.classList.add('image-3');
        cardImage.classList.add('image-3')
    }
    else if(index == 3){
        imageContainer.classList.add('image-4');
        cardImage.classList.add('image-4')
    }
    
}
function arrowLeft(){
    index == 0 ? index = 3 : index--;
if(index == 0){
    imageContainer.className = 'container-fluid min-vh-100 d-flex align-items-center justify-content-center image-1'
    cardImage.className = 'image-1'

}
    else if(index == 1){
        imageContainer.className = 'container-fluid min-vh-100 d-flex align-items-center justify-content-center image-2'
        cardImage.className = 'image-2'

    }
    else if(index == 2){
        imageContainer.className = 'container-fluid min-vh-100 d-flex align-items-center justify-content-center image-3'
        cardImage.className = 'image-3'
    }
    else if(index == 3){
        imageContainer.classList.add('image-4');
        cardImage.classList.add('image-4')
    }
}