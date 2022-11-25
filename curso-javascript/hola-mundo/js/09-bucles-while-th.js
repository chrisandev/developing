'use strict'

/*BUCLE WHILE - Estructuras de control

El bucle while es otro iterador, loop, etc.. se compone de una condicion,
y de una instruccion, en este caso es menos estricto que el bucle for.
Mientras  se cumpla la condicion iterara la instruccion de manera infinita
, a no ser que pongamos un operador de incremento o decremento para que 
en algun momento el bucle se detenga, pero en principio, ejecutará el contenido
sin cesar.*/

var año= 2022;

while(año <= 2030){
	console.log('Estamos en el año: '+año);
	año++;

	if(año == 2026){
		break;
	}
}

var año2= 1995;

while(año2 > 1980){
	document.write('Es el año: '+año2+'</br>');
	año2--;
}
