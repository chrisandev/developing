'use strict'

var texto1= "Bienvenido al curso de JavaScript de curso Victor Robles"

var busqueda = texto1.indexOf("curso"); //Este metodo saca la posicion del string donde empieza esa palabra (osea, de su primer char)

var busqueda = texto1.lastIndexOf("curso"); //AL igual que el anterior, saca la posicion del primer char, pero de la ultima palabra 
//que coincida con la busqueda.

var busqueda = texto1.search("curso"); //Igual que indexOf, si buscas una palabra que no esté, marcaria -1, significa que no existe

var busqueda = texto1.match("curso"); //Devuelve un array e indica el indice en el que se encuentra esa palabrá, más su posicion en 
//el string, en este caso indcara posicion 14, indice 0 (indice= posicion de array) por que es su primer elemento, SOLO ENCUENTRA 1
//ELEMENTO, si queremos que encuentre 2 palabras iguales se hará del siguiente modo.

var busqueda= texto1.match(/curso/g)

var busqueda= texto1.substr(14,5); //Sacame desde el char 14, 5 caracteres en adelante en el resultado, en este caso, la palabra curso

var busqueda= texto1.charAt(44); //Sacame el char ubicado en esa posicion

var busqueda= texto1.startsWith("Bienvenido al curso"); //Devuelve true o false segun si el string pasado coincide con el comienzo
//del texto, en este caso da true por que todos los caracteres coinciden

var busqueda= texto1.endsWith("Victor Robles"); //Lo mismo que el startsWith pero si acaba por estos caracteres

var busqueda= texto1.includes("JavaScript de");//Verifica si el texto incluye esa palabra con exactamente esos caracteres "keysensitive"


console.log(busqueda);

