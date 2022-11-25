'use strict'

//Bucle FOR
//Es una estructura de control, quizá la más usada que se repite varias veces, tantas como declaremos

var numero=100;

//Se compone de un iterador o contador(i), es una variable que empezará en la posicion que le indiquemos e ira actualizandose en cada
//vuelta que de el bucle, luego le indicaremos la condicion, es decir, cuantas veces ha de iterar mientras  se cumpla la condición,
// y finalmente añadiremos el incrementador o decrementador del contador, se realizará con los operadores de incremento (++) o de decremento
// (--), de este modo en cada vuelta, se le sumará o restará uno a la variable i, y está irá cambiando su valor.

for(var i=0;i<numero;i++){
	console.log("Vamos por el numero"+ i); //En este caso el iterador llegará hasta 99 por que su condicion es que llegue a ser menor 
	//que el numero que es 100, y empieza en el 0 y no en el 1
}

//debugger;		Esta instruccion sirve para ir iterando en la consola de manera manual y viendo el proceso, es como un cuadro de 
//control manual