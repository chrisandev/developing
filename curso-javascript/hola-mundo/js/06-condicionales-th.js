'use strict'


//Condicional IF
/*Estructura de control que nos permite comparar una cosa con otra, y hacer algo.
En caso de que se cumpla esa condicional, hara algo que le ordenemos al programa, y 
en caso de no cumplirse podemos ordenarle que haga otra cosa o que no haga nada.

OPERADORES RELACIONALES, tenemos los siguientes:
> Mayor que
< Menor que
== Igual que 
!= Distinto que
>= Mayor o igual que
<= Menor o igual que
*/

var edad1= 30;
var edad2= 12;

if(edad1 > edad2){
	//Si se cumple ejecuta esto
 console.log("edad 1 es mayor que edad 2");
}
else{ //De lo contrario, ejecuta esto
	console.log("La edad 1 es inferior");
}

var edad= 74;
var nombre="David Suarez";

if(edad >= 18){
console.log(nombre +" "+"tiene "+edad+" años, es mayor de edad");

if(edad <= 33){
	console.log("Todavia eres milenial");
}
else if(edad >=70){
	console.log("Eres anciano");
}
else{
	console.log("Ya no eres milenial");
}
}
else{
console.log(nombre +" "+"tiene "+edad+" años, es menor de edad");
}






