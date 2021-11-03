

let nombre = prompt("¿Como te llamas?");
alert("Hola " + nombre);
let RESULTADO = 0;
let cuantosNumeros;
let numeros = [];

let respuesta = prompt("¿Me darías unos numeros para sumar?(Si/No)");

if (respuesta == "Si" || respuesta == "si"){
	cuantosNumeros = Number(prompt("¿Cuantos numeros me vas a dar?"));
	
	numeros = recibenumero(cuantosNumeros);
	RESULTADO = sumar(numeros);

	alert("Gracias! El resultado es " + RESULTADO);
}else if( respuesta == "No" || respuesta == "no"){
	RESULTADO = 0;
	alert("Esta bien :C");
}

function sumar(numeros){
	let resultado = 0;
	for (let i=0; i<numeros.length; ++i){
		resultado += numeros[i].valueOf();
	}
	return resultado;
	
}

function recibenumero(cantidad){
	for (let i=0; i<cantidad; ++i){
		numeros[i] = Number(prompt("Dame un numero"));
	}
	return numeros;
}


//Entrega 3
