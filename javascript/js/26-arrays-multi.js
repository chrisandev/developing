'use strict'

//ARRAYS MULTIDIMENSIONALES O MATRIX, MATRICES: SON COLECCIONES DE DATOS DE DIFERENTES TIPOS O DEL MISMO TIPO CON VARIAS DIMENSIONES,
//ES DECIR, CON UN ARRAY DENTRO DE OTRO ARRAY

var categorias=['terror','comedia','accion'];

var peliculas=['la verdad duele','gran torino','la vida es bella'];

var cine=[categorias,peliculas]; //CREAMOS EL ARRAY MULTIDIMENSIONAL 

//console.log(cine); Asi los mostrariamos el matrix entero.

console.log(cine[0][2]); //esto indicara dimension 0, elemento numero 2, al estar previamente definido categorias, esta sera la 0, 
//y dentro de ese array, el elemento 2 será accion (ya que los arrays empiezan por el elemento 0)