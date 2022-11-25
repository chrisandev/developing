'use strict'

/*Parametros REST Y SPREAD*/

/*function listadoFrutas(fruta1, fruta2){
	console.log("Fruta 1: ",fruta1);
	console.log("Fruta 2: ",fruta2); //Poner una coma como simbolo de concatenacion por lo visto tambien es valido.
	//Pero además, añade un espacio.
}

listadoFrutas("Naranja", "Manzana", "Sandia,", "Pera", "Melon", "Coco"); /*Si imprimimos estos parametros veremos que solo se muestran
los dos primeros ya que son los dos parametros creados en la declaracion de la funcion, los demás se perderian de este modo*/

/*function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){ Si ponemos los 3 puntos(...) previos a una variable en la declaracion,
	se creará un parametro REST (de resto), este recogerá todos los elementos que pasemos sobrantes en la invocacion de la funcion 
	y si hemos puesto una funcion de mostrar, los mostrara como un array ordenado. De este modo podremos capturar un numero indefinido 
	de parametros sin que sepamos los que van a llegar
	console.log("Fruta 1: ",fruta1);
	console.log("Fruta 2: ",fruta2); 
	console.log(resto_de_frutas); 
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");*/


function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
console.log("Fruta 1: ",fruta1);
console.log("Fruta 2: ",fruta2); 
console.log(resto_de_frutas); 
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

var frutas =["Naranja, Manzana"]; /*EN ESTE CASO, METEMOS ESTOS DOS ELEMENTOS EN UN ARRAY LLAMADO FRUTAS*/
listadoFrutas(frutas, "Sandria", "Pera", "Melon", "Coco"); /*SI IMPRIMIMOS FRUTAS SIN LOS ... DELANTE, MOSTRARÁ EL ARRAY FRUTAS COMO 
SI FUERA LA VARIABLE FRUTA1, ES DECIR EQUIVALDRÁ FRUTA1 A LAS 2 FRUTAS EN UN ARRAY.
SI POR LO CONTRARIO USAMOS EL PARAMETRO SPREAD APLICANDO LOS 3 PUNTITOS ... DELANTE, OBTENDREMOS QUE CADA ELEMENTO DEL ARRAY, 
ES ASIGNADO A UNA VARIABLE DE LA DECLARACION, POR LO QUE NARANJA SERA FRUTA 1 Y MANZANA SERIA FRUTA 2*/