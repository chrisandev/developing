'use strict'

/*FUNCIONES DE BUSQUEDA EN TEXTOS, las más comúnes*/

var texto1= 'Bienvenido al curso de Victor curso Robles Web';

/*IndexOf: Indica la posicion de donde empieza el elemento que queramos
buscar contando que empieza a contar desde la posicion de 0.
Ej: curso empieza en el caracter 15, entonces el resultado será 14 por que 
cuenta desde 0.
El metodo search es un sinonimo de IndexOf*/

var busqueda = texto1.indexOf('curso')
console.log(busqueda); 

/*LastIndexOf: Nos sacará lo mismo que en IndexOf, pero de la ultima 
coincidencia del elemento a buscar, si hay 2 elementos, indicará donde se
encuentra solo el ultimo*/

var busqueda = texto1.lastIndexOf('curso');
console.log(busqueda);

/*Match: Nos devuelve un array con un solo elemento que busquemos
(el primero que encuentre de coincidenicia), en la posicion 0 del array,
el indice de donde empieza ese elemento, y el input que es, todo el texto
o total en donde ha buscado la posible coincidencia
Si tenemos 2 elementos iguales en nuestro texto tendremos que hacer una 
busqueda global en vez de única "", pero la busqueda global solo devuelve
un array con el numero de elementos que encuentre, y ya*/

busqueda = texto1.match('curso'); //Busqueda única
console.log(busqueda);

busqueda = texto1.match(/curso/g); //Busqueda global
console.log(busqueda);

/*substr: Nos pide 2 parametros, el primer indica desde que posicion 
empezamos la busqueda, y el segundo, cuanto elementos queremos mostrar*/
busqueda= texto1.substr(14, 5);
console.log(busqueda);

/*CharAt: Nos pide una posicion y nos devolverá el elemento o caracter
de esa posicion, recordemos que las posiciones empiezan en el 0*/
busqueda= texto1.charAt(14);
console.log(busqueda);

/*startsWith: Le pasaremos x caracteres, y nos devolverá true si nuestro
texto comienza exactamente por esos caracteres en ese orden, si no devolverá
false
endsWith: Lo mismo pero si concretamente el texto finaliza con los caracteres
que le pasemos en el mismo orden*/
busqueda= texto1.startsWith("Bienve");
console.log(busqueda);

busqueda= texto1.endsWith("Robles Web");
console.log(busqueda);

/*includes: Nos devuelve true o false si reconoce la palabra que le pasemos,
es case sensitive por lo que tendremos que pasarle los caracteres exactos
en el mismo orden para que de true si existen*/
busqueda= texto1.includes('Robles Web');
console.log(busqueda);


