'use strict'


/*Operadores relacionales
Mayor que: >
Menor que: <
Mayor o igual que: >=
Menor o igual que: <=
Igual: ==
Distinto a: !=*/

var edad=18;
var nombre="David Suarez";

//CONDICIONAL IF, ELSE IF Y ELSE. Estructura de control
//El condicional IF entrará a procesarse si se cumple la condicion especificada al inicio de la condicion, ELSE IF se pone previo al ELSE, 
//significa incluso y establece otra condicion, y por ultimo quedará el else que ocurrirá cuando nada de los demás se cumpla, realizando
//lo que establezcamos en el. Ejemplo:

if(edad>=18){
	//Es mayor de edad
	console.log(nombre+" tiene "+edad+" ,es mayor de edad");

	if(edad<=33){
		console.log('todavia eres milenial');
	}else if(edad>=70){
		console.log("Eres anciano");
	}else{
		console.log("Ya no eres milenial");
	}
}else{
	console.log("No eres mayor de edad");
}

/*COMO SE PUEDE APRECIAR, PUEDES ANIDAR IF, PERO UN UNICO ELSE IF POR CADA IF POR LO VISTO?? no lo se.*/

//Tambien podemos unificar varias operaciones en un mismo IF sin necesidad de estar anidando 300 IFS por que no es algo productivo,
//para ello existen los siguientes operadores relacionales.

/*OPERADORES RELACIONALES (2 PARTE)
AND(Y): &&
OR(O): ||
NEGACIÓN: ! (PERO QUE REALMENTE SIEMPRE ES !=)*/

//Veamos ejemplos:

var year=2020;

//Negación
if(year!=2018){
	console.log("El año no es 2016, realmente es el "+year);
}

//AND
if(year >=2020 && year <= 2020 && year !=2018){
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era post moderna");
}

//IF
if(year == 2018 || (year >= 2018 && year ==2028)){
	console.log("El año acaba en 8");
}else{
	console.log("Año no registrado");
}







