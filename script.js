'use strict'
const button = document.querySelector('.main button');
const jokeText = document.querySelector('.main p');
// The event listener is invoking the  getJoke function upon page load
document.addEventListener('DOMContentLoaded', getJoke)


button.addEventListener('click', getJoke);

function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        // We are accepting the header 'application/json' as it says in the documentation.
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

// Headers notes***
/*
These are methods we can use with Header opbjects. Some are used on response and some are used on request.
append() - add something to the headers object
delete() - delete
get()- Retrieve a value
has() - To check if it has a specific header
values() - All the values from all the headers
keys() - An array of all the keys
entries() - This gives an array of the arrays. It will return a key and a value.
set() - This let's you set the value for a header.
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