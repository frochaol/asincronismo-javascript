let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest(); //-- Instanciado de objeto
    xhttp.open('GET', url_api, true);    // -- true significa que se maneja de forma asincrona como tercer valor, por defecto es true
    xhttp.onreadystatechange = function (event) {
        //-- se indica si el estado es satisfactorio existen 5 estados
        if (xhttp.readyState === 4) { // 4 significa que esta completado
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))                
            } else {
                const error = new Error('Status diferente: ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data1.info.pages);
            console.log(data2.origin);
            console.log(data3.dimension);
        })
    })
});