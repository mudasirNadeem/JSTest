var cardContainer = document.getElementById('cardContainer');
    var index = 0;
    var localStorageItems ; 
    function save$UpdateStorage(){
    localStorageItems =   JSON.parse(localStorage.getItem("lastname")) || [];
    cardContainer.innerHTML = localStorageItems;
}
function addCard(){
    var idIndex = index;
cardContainer.innerHTML  += ` 
    <div class="col-md-4 mb-3" id="${idIndex}">
        <div class="note-card">
            <div class="note-header">
                <i class="fas fa-edit" onclick="exitTexteara(${idIndex})"></i>
                <i class="fas fa-trash" onclick="deleteFun(${idIndex})"></i>
            </div>
            <div class="note-content" id="${'note-contant-' + idIndex}" style="height:200px;">
                <textarea class="note-textarea" placeholder="Type your note here..." id="${'texteara-'+idIndex}"  ></textarea>
                <p id="${'discription-' + idIndex}"></p>
            </div>
        </div>
            </div>`;
            index++;
    localStorage.setItem("lastname", JSON.stringify(cardContainer.innerHTML)); 
    save$UpdateStorage();
        }
function deleteFun(id){
    var removeElement = document.getElementById(id);
    removeElement.remove();
    localStorage.setItem("lastname", JSON.stringify(cardContainer.innerHTML)); 
}

function exitTexteara(id){
    var discription = document.getElementById('discription-'+ id)
    var exitTextearaElement = document.getElementById('texteara-'+id);
    // var noteContant = document.getElementById('note-contant-'+id);
    if(!exitTextearaElement.classList.contains('d-none')){
        exitTextearaElement.classList.add('d-none');
    }
    else{
        exitTextearaElement.classList.remove('d-none');
    }
    if(exitTextearaElement.classList.contains('d-none')){
        discription.innerText  = exitTextearaElement.value;
    }
    else{
        discription.innerText  = '';
    }
}
save$UpdateStorage();