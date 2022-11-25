'use strict'

/*Bucle DO WHILE - Estructuras de control
A diferencia del While, el Do siempre entra a ejecutar el bloque de 
instrucciones al menos una vez, en este caso, primera se ejecutaran las 
instrucciones en el DO, y una vez ejecutadas se evaluará la condicion en 
el while, en caso de que la condición se cumpla se volverá a ejecutar el
bloque de instrucciones en el DO, y asi hasta que la condicion de iteracion
deje de cumplirse.
Podemos parar la ejecucion del bucle con la instruccion break, metiendola
en un condicional anidado como un IF.
*/

var year=2022;

do{
	console.log('Todavia no es 2030, estamos en el: '+year);
	year++;
}
while(year < 2030);



var año=2000;

do{
	alert('No es el 1990, es el: '+año);
	año--;
}while(año > 1990);