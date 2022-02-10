'use strict'
let response = fetch('icanhazdadjoke.com')
    .then(response => response.json())
    .then(data => console.log(data));
