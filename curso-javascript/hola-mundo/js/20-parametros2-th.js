'use strict'

/*PARAMETROS REST Y SPREAD*/

/*REST
En la declaracion de una funcion, podemos indicar un parametro con 3 puntos
delante, esto significa que todo lo que metamos de parametros al invocar
la funcion que no estuviera definido en una variable normal, como fruta1
y fruta2, se recojera en esta variable en forma de un array ordenado con
todos lo elementos que sean excedentes*/

function listadoFruta(fruta1, fruta2, ...resto_de_frutas){
	console.log('fruta 1 es '+fruta1);
	console.log('fruta 2 es '+fruta2);
	console.log(resto_de_frutas);
}
/*Naranja sera fruta1, Manzana corresponderá a fruta2, y lo restante
se recogerá en la variable resto de frutas como un array ordenado*/
listadoFruta("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

/*SPREAD
Si en la invocacion de una funcion queremos usar un array como parametro
que contiene varios elementos y queremos que cada uno de esos elementos
sea asignado como un unico valor, deberemos pasar como argumento el nombre
del array antelado por ..., de esta forma no será reconocido como un array,
si no cada uno de sus elementos será un elemento indivisible, Rest recoge
los elementos y los unifica en un array. Y Spread los esparce desde un
array, a elementos sueltos*/

var frutas = ["Naranja", "Manzana"];
listadoFruta(...frutas, "Sandia", "Pera", "Melon", "Coco");