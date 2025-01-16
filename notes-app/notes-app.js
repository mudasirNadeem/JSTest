var cardContainer = document.getElementById("cardContainer");
var localStorageItems;
var saveId;
var index = 0;

function loadAllTasks() {
    localStorageItems = JSON.parse(localStorage.getItem("task")) || [];
    saveId = JSON.parse(localStorage.getItem("id")) || 0;
    index = saveId + 1; 
    cardContainer.innerHTML = localStorageItems;
}

function addCard() {
    var idIndex = index;
    cardContainer.innerHTML += `
    <div class="col-lg-3 col-md-6 col-sm-12 mb-3" id="${idIndex}">
        <div class="note-card">
            <div class="note-header">
                <i class="fas fa-edit" onclick="exitTexteara(${idIndex})"></i>
                <i class="fas fa-trash" onclick="deleteFun(${idIndex})"></i>
            </div>
            <div class="note-content" id="note-content-${idIndex}" style="height:200px;">
                <textarea class="note-textarea" placeholder="Type your note here..." id="textarea-note-tetarea-text-${idIndex}"></textarea>
                <p id="description-${idIndex}"></p>
            </div>
        </div>
    </div>`;
    localStorage.setItem("id", JSON.stringify(index));
    localStorage.setItem("task", JSON.stringify(cardContainer.innerHTML));
    index++;
}

 function deleteFun(id) {
     var removeElement = document.getElementById(id);
     removeElement.remove();
     localStorage.setItem("task", JSON.stringify(cardContainer.innerHTML));
    }
    function exitTexteara(id){
        var textareaIdGetting = document.getElementById(`textarea-note-tetarea-text-${id}`);
        var textContant = document.getElementById(`description-${id}`);
        textareaIdGetting.classList.toggle('d-none');
        if(textareaIdGetting.value){
            textareaIdGetting.value =  textContant.innerText;
            localStorage.setItem("task", JSON.stringify(cardContainer.innerHTML));
        }
        else{
            textContant.innerText = textareaIdGetting.value;
           localStorage.setItem("task", JSON.stringify(cardContainer.innerHTML));
        }
    }
loadAllTasks();

