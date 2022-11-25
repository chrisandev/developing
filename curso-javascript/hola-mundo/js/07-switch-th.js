'use strict'

/*CONDICIONAL SWITCH: En el generaremos una estructura de control que
evaluara distintas opciones o casos, cuando hay muchas opciones a valorar
será mejor opcion que establecer un IF.
Tras cada caso, deberemos indicar un break para pasar al siguiente y como
ultima opcion siempre habrá que establecer un default.*/

var edad= 24;
var texto;

switch(edad){ //Entre parentesis indicaremos la variable a valorar
case 18:
texto= "Ya eres mayor de edad";
break;

case 35:
texto= "Ya eres hombre con pelos en el pecho";
break;

case 40:
texto = "Crisis de los 40";
break;

default:
texto = "Tu edad es neutra";
}

console.log(texto);

