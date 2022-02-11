'use strict'
const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

button.addEventListener('click', getJoke);

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
