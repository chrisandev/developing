'use strict'

/*Se pide un programa que pida 2 nuneros y nos diga, cual es el mayor, el menor, y si son iguales*/
//PLUS: Si los numeros no son un numero o son menores o iguales a cero, que nos los vuelva a pedir.

//funcion prompt sirve para pedir un dato y almacenarlo.
/*EJERCICIO 1
var numero1= parseInt(prompt('Introduce el numero 1', 0)); /*El prompt recoge los datos en forma de string, por eso 
lo paseamos, 0 será el valor default.*/
var numero2= parseInt(prompt('Introduce el numero 2', 0));

if(numero1>numero2){
	console.log("El numero "+numero1+" es mayor que "+numero2);
}else if(numero2 > numero1){
	console.log("El numero "+numero2+" es mayor que "+numero1);
}else if(numero1==numero2){
	console.log("Ambos numeros son iguales");
}else{
	console.log("Introduce numeros correctos")
}*/
//PLUS	

var numero1=parseInt(prompt('Introduce el numero 1'));
var numero2=parseInt(prompt("Introduce el numero 2"));

while(numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)){

numero1=parseInt(prompt("Introduce el numero 1"));
numero2=parseInt(prompt('Introduce el numero 2'));

}
if(numero1 > numero2){
	alert("El numero "+numero1+" es mayor que el numero "+numero2);
}else if(numero2 > numero1){
	alert('El numero '+numero2+' es mayor que el '+numero1);
}else if(numero1 == numero2){
	alert('Ambos numeros son iguales');
}


