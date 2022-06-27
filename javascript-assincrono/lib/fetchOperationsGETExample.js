/*
fetch
Operações no banco(POST, GET, PUT, DELETE, etc...)
*/

fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache'
})

    .then(response => response.json())
    .then(json => console.log(json))

// retorna uma Promise