'use strict'

/*El bucle While, es un bucle que mientras que se cumpla su condición inicial, se repetira de manera infinita, a no ser que indiquemos algo
como un contador dentro de este que vaya haciendo que en algun momento, la condición no se cumpla.*/

var year=2018;

while(year != 1991){ //Mientras que la condición sea true, ejecuta su interior, y vuelve a consultar la condición.
	//Ejecuta el contenido
	console.log("Estamos en el año "+year);

	year--; //Aqui vamos actualizando la variable year con el operador de decremento, para que la condicion del bucle deje de cumplirse
	//en algun momento.
}

//Bucle Do While, este bucle siempre entrará en ejecucción al menos una vez, realiza en contenido del Do, y posteriormente evalua
//la condicion impuesta por el while.

var years=30;

do{
	alert("ME EJECUTO SOLO CUANDO SEA DIFERENTE A 20");
	years--;

}while(years>25);

//Tambien podriamos cortar la ejecución de un bucle con la instrucción break, del siguiente modo.

var yearss=2018;

while(year !=1991){
	console.log("Estamos en el año: "+year);

	if(year == 2000){
		break; //EN ESTE MOMENTO EL BUCLE DEJARÁ DE EJECUTARSE
	}
}