'use strict'
const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
// The event listener is invoking the  getJoke function upon page load
document.addEventListener('DOMContentLoaded', getJoke)


button.addEventListener('click', getJoke);

function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
        // This will will turn the data into json format and get the object.
    }).then(data => data.json())
        .then(obj => jokeText.innerHTML = obj.joke)
        .catch((error) => {
            console.log('Error')
        })
}

/*
async function getJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await response.json();
    // **Remember that it returns an object so jokeObj.joke will return only the joke
    // console.log(jokeObj.joke)
    jokeText.innerHTML = jokeObj.joke;
}
*/