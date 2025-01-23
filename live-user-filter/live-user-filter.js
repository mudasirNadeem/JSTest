var userList = document.getElementById('userList');
var searchContant = document.getElementById('search-Contant')
var liveFielter = {
    headers: {
        'Accept': 'application/json'
    }
}
async function getData() {
    userList.innerHTML = `
    <div class="loading-container">
        <div class="spinner"></div>
        <p class="text-center mb-0 py-4">Loading users...</p>
    </div>
`;
const res = await fetch('https://randomuser.me/api?results=50', liveFielter)
var dataToJson = res.json()
.then((result) => {
    userList.innerHTML  = '';
    result.results.forEach(element => {
            userList.innerHTML += `
          <div class="user-item d-flex align-items-center head-div" >
                        <img src="${element.picture.large}" alt="Profile" class="profile-image">
                        <div class="user-info">
                            <h6 class="mb-0">${element.name.first} , ${element.name.last}</h6>
                            <p class="user-location"><span class="">${element.location.city}</span>  ${element.location.country}</p>
                        </div>
                    </div>
                        `;
                    });
    });
}
searchContant.addEventListener('input' , function(){
    fielterList();
});
function fielterList(){
var getDiv = document.querySelectorAll('.head-div');
var changeToArr = [...getDiv] 
changeToArr.forEach(item =>{
var checkitem = item.textContent.toUpperCase();
var uppercaseSearchField = searchContant.value.toUpperCase();
if(checkitem.includes(uppercaseSearchField)){
    item.classList.remove('d-none');
}
else{
    item.classList.add('d-none');
}
})
}
getData();