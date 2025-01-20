var addcontent = document.getElementById('addcontent');
var index=1;
var inputBoxValue = document.getElementById('inputbox');
inputBoxValue.addEventListener('keydown' , (e) => {
   inputBoxValue = document.getElementById('inputbox').value;
    if(e.key ==  'Enter'){
            if(inputBoxValue.length > 0){
                addcontent.innerHTML += `
                <div id='${index}' class="d-flex">
                <a href="#" class="list-group-item d-flex align-items-center justify-content-between list-group-item-action pb-1"  onclick="overline(${index})">${inputBoxValue}
                </a>
            </div>`;
            inputBoxValue = document.getElementById('inputbox').value = "";
            index++;
            }
            else{
                alert("Please Enter a data");
            }
        }
    });
    
    addcontent.addEventListener('contextmenu' , (e) =>{
        e.preventDefault();

      var getElement =   e.target;
      getElement.parentElement.remove();
    });
function overline(input){
    var angarToverline = document.getElementById(input); 
    angarToverline.classList.toggle('text-decoration-line-through');
}