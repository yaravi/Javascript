// URL API: https://goodreads-devf-aaron.herokuapp.com/api/v1/

const request = require('request');
const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

// Obtener la lista de autores

const listaAutores = () => {
    request.get(URI, function (err, response, body) {

        if (response.statusCode === 200) {
            const authors = JSON.parse(body);
            console.log(authors);
        }
    })
}

// Obtener el autor por ID
const mostrarInfoAutor  = (id) => {
    request.get(URI + id, function (err, response, body){
        if(response.statusCode === 200) {
            const author = JSON.parse(body);
            console.log(author);
        }
    })
}

// Crear un autor
const  createAuthor = (jsonData) => {
    const objConfig = {
        url: URI,
        form: jsonData
    }
    request.post (objConfig, function(err, response, body) {
        console.log(response)
        if(response.statusCode === 201) {
            // el autor fue creado
            const author = JSON.parse(body);
            console.log(author);
        } 
        else {
            console.log(response);
        }
    })
}


// Actualizar info de autor



module.exports = {
    listaAutores,
    mostrarInfoAutor,
    createAuthor
}