// -- ESTRUCTURA ECMS6 PARA PROMESAS
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {  //-- se envían 2 argumentos
        if (true) {
            resolve('Esta correcto');
        } else {
            reject('Opps no esta correcto');
        }
    });  
};

// -- Llamado a una promesa que obtiene la respuesta correcta como el resolve y también
// obtener el error por reject.
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {    // -- Forma correcta de armar un error en el reject
            const error = new Error('Whoooop!');
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err);
    })