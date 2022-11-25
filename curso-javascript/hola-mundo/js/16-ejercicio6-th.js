'use strict'

/*Hacer ejercicio que nos indique si un numero es par o inpar, ha de contener:
1- Ventana que pida un numero al user
2- Si no es valido, que nos pida de nuevo el numero*/

/* FORMA 1º
var numero;

do{

numero=parseInt(prompt('Introduce un numero', 0));

if(numero%2 == 0){
	document.write('<li>El numero es par</li>');
}else{
	document.write('<li>El numero es impar</li>');
}


}while(isNaN(numero) || numero < 0);
*/

var numero=parseInt(prompt('Introduce un numero'));

while(isNaN(numero)){

numero=parseInt(prompt('Introduce un numero'));
}

if(numero%2 == 0){
	alert('El numero es par');
}
else{
	alert('El numero es impar');
}