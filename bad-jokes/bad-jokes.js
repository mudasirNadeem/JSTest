var jokeText = document.getElementById('jokeText');
var badJokesbj = {
    headers: {
        'Accept': 'application/json'
    }
}
 async function badJokes(){
var result = await fetch(`https://icanhazdadjoke.com`, badJokesbj)
var dataToJson = result.json()
    .then(resultAssing =>{
        jokeText.innerText = resultAssing.joke;
    })
}
badJokes();