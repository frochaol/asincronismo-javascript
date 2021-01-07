let XMLHttpRequest = required('xmlhttprequest').XMLHttpRequest;

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