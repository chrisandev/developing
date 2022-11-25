'use strict'

/*Objeto Math
Este objeto proporciona diversos metodos asociados de operaciones matematicas,
si no instanciamos mediante una variable, podremos usar sus metodos al igual
que haciamos con el objeto date*/

/*Metodo random, devuelve un numero aleatorio decimal*/
console.log(Math.random()); 
//Para sacarlo x numeros enteros basta con multiplicarlo por x numero de ceros
console.log(Math.random()*10000);

/*ceil, redondea y transforma el numero al siguiente numero entero, sin decimales
Si luego usas un random, debes mult al menos por 10 o siempre dará 1 */
console.log(Math.ceil(Math.random()*10000));