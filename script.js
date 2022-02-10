'use strict'
let response = fetch('https://icanhazdadjoke.com/')
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log('You have an error')
    })

