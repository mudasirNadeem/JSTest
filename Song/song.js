var soundButton = document.querySelectorAll('button');
var index = 1;
soundButton.forEach(button =>{
    var idIndex = index;
    button.addEventListener('click' ,  function(){
        button.id = idIndex;
        addSound(idIndex);
    })
    index++;
})
var firstSong = new Audio('1.mp3');
var socondSong = new Audio('2.mp3');
var thiredSong = new Audio('3.wav');
var fourthSong = new Audio('4.wav');
var fiffthSong = new Audio('5.mp3');
function addSound(id){
var getId = document.getElementById(id);
if(getId.id == '1'){
    if( firstSong &&  firstSong.paused){
        firstSong.play();
        socondSong.pause();
        thiredSong.pause();
        fourthSong.pause();
        fiffthSong.pause();
    }
    else{
        firstSong.currentTime = 0;
    }
 
}
 else if(getId.id == '2'){
    if( socondSong &&  socondSong.paused){
    socondSong.play();
    firstSong.pause();
    thiredSong.pause();
    fourthSong.pause();
    fiffthSong.pause();
    }
    else{
        socondSong.currentTime = 0;

    }
}
else if(getId.id == '3'){
    if( thiredSong &&  thiredSong.paused){
    thiredSong.play();
    firstSong.pause();
    socondSong.pause();
    fourthSong.pause();
    fiffthSong.pause();
    }
    else{
        thiredSong.currentTime = 0;

    }
}

else if(getId.id == '4'){
    if( fourthSong &&  fourthSong.paused){
    fourthSong.play();
    thiredSong.pause();
    socondSong.pause();
    fiffthSong.pause();
    }
    else{
        fourthSong.currentTime = 0;
    }
}
else if(getId.id == '5'){
    if( fiffthSong &&  fiffthSong.paused){
    fiffthSong.play();
    fourthSong.pause();
    thiredSong.pause();
    socondSong.pause();
    fourthSong.pause();
    }
    else{
        fiffthSong.currentTime = 0;
    }
}
}