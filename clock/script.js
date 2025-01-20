var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var body = document.getElementsByTagName('body')
function updateSecond(){
    const d = new Date();
    second.style.transform = `rotate(${d.getSeconds() * 6}deg)`;
    minute.style.transform = `rotate(${d.getMinutes() * 6}deg)`;
    hour.style.transform = `rotate(${d.getHours() * 30 + d.getMinutes() * 0.5}deg)`;
}
function modeChange(){
body[0].classList.toggle('dark');
body[0].classList.toggle('bg-white');
if(!body[0].classList.contains('dark')){
    second.style.setProperty('--clr', 'black');
}
else{
    second.style.setProperty('--clr', 'white');
}
}
setInterval(updateSecond, 1000);
updateSecond();