'use strict'

/*Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir uno negativo
 y ahi mostrar el resultado*/

/*El bucle que usaremos será el Do while, pues es el que efectua la iteracion hasta que se cumpla 
una condicion, en este caso, introducir un numero negativo.*/


var suma=0;
var contador=0;

do{

var numero=parseInt(prompt('Introduce numeros hasta introducir uno negativo'));

	if(isNaN(numero)){
		numero=0;
	}
	else if(numero>=0){
		suma+=numero;
		contador++;
		console.log('Has introducido '+contador+'numeros, tu cantidad total es '+ suma);
	}
}while(numero>=0);


console.log('Has introducido un numero negativo, la media acumulada es de '+ (suma/contador));

