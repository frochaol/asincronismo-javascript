// -- CALLBACKS
function sum(num1, num2) {
	return num1 + num2;
}

function calc(num1, num2, callback) {
	return callback(num1, num2);
}

console.log(calc(6,2,sum));
//-- para crear un callback como librería utilizamos el archivo package.json y dentro de scripts asignamos el callback que acabamos de crear, 
//-- para correr este script solo utilizamos npm run callback (o el nombre que se puso para el script) para más información ver el archivo package.json línea 7

// -- Siguiendo el ejemplo
function date(callback) {
	console.log(new Date);
	setTimeout(() => {
		let date = new Date;
		callback(date);
	}, 3000);
}

function printDate(dateNow) {
	console.log(dateNow);
}

date(printDate);
