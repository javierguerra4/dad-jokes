'use strict'
let response = fetch('https://icanhazdadjoke.com/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log('You have an error')
    })

