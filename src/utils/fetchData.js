//-- Versión ECMAS 6
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest(); //-- Instanciado de objeto
        xhttp.open('GET', url_api, true);    // -- true significa que se maneja de forma asincrona como tercer valor, por defecto es true
        xhttp.onreadystatechange = (() => {
            //-- se indica si el estado es satisfactorio existen 5 estados
            if (xhttp.readyState === 4) { // 4 significa que esta completado
                (xhttp.status === 200)  // -- Esto sería un If pero con operadores terneareos
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
            }
        });
        xhttp.send();
    });
}
module.exports = fetchData;