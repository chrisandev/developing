'use strict'

/*ARRAYS MULTIDIMENSIONALES
Son arrays, dentro de otro array*/

var genero = ['terror', 'Ciencia ficcion', 'Accion'];
var peliculas = ['Gran torino', 'BraveHearth', 'La vida es bella'];

var cine = [genero, peliculas];

console.log(cine);

console.log(cine[0][2]); /*Primero escogemos la dimensión, y luego el 
elemento de esa dimension, en este caso  escogemos la dimension genero
y el elemento Acción*/