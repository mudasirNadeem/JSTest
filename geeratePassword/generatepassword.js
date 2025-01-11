function generatePassword(){
    var uppercaseCheck = document.getElementById('uppercaseCheck').checked;
    var lowercaseCheck = document.getElementById('lowercaseCheck').checked;
    var numbersCheck = document.getElementById('numbersCheck').checked;
    var symbolsCheck = document.getElementById('symbolsCheck').checked;
    var passwordDisplay = document.getElementById('passwordDisplay');
    var passwordLength = document.getElementById('passwordLength').value;
    var num = Math.floor(passwordLength)
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var specialChar = '!@#$%^&*()-_=+\\|[]{};:/?.>';
    var numofDigit = '123456789';
    var passowrd = '';
    passwordDisplay.innerText = '';
    if(uppercaseCheck){
        var random = Math.floor(Math.random() * 8);
        passowrd += uppercase[random];
    }
    else{
        passowrd += '';
    }
    
    if(lowercaseCheck){
        var random2 = Math.floor(Math.random() * 8);
        passowrd += lowercase[random2];
    }
    else{
        passowrd += '';
    }
    if(numbersCheck){
        var random3 = Math.floor(Math.random() * 8);
        passowrd += numofDigit[random3];
    }
    else{
        passowrd += '';
    }

    if(symbolsCheck){
        var random4 = Math.floor(Math.random() * 8);
        passowrd += specialChar[random4];
    }
    else{
        passowrd += '';
    }
    if(uppercaseCheck){
        for(var i = 0; i < 10; i++){
            var random5 = Math.floor(Math.random() * 5);
            passowrd += 
            uppercase[random5];
        }
    }

    if(numbersCheck){
        for(var i = 0; i < 10; i++){
            var random5 = Math.floor(Math.random() * 5);
            passowrd += 
            numofDigit[random5]
        }
    }
    if(symbolsCheck){
        for(var i = 0; i < 10; i++){
            var random5 = Math.floor(Math.random() * 5);
            passowrd += 
            specialChar[random5];
          
        }
    }
    if(lowercaseCheck){
        for(var i = 0; i < 10; i++){
            var random5 = Math.floor(Math.random() * 5);
            passowrd += 
            lowercase[random5];
        }
    }
    for(var i = 0;  i < num; i++)
        if(passowrd[i] != undefined){
            passwordDisplay.innerText += passowrd[i];
        }
    }
   function copyPassword(){
    var passwordDisplay = document.getElementById('passwordDisplay').innerText;
    if(passwordDisplay){
        navigator.clipboard.writeText(passwordDisplay);
        alert(' Copy ' + passwordDisplay)
    }
   }