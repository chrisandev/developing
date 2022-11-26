'use strict'

/*Aplicacion usando node JS y la CMD, podemos usar node JS mediante la consola de comandos
 para lanzar scripts, peticiones, pasar datos... y hacer la lectura de lo que haga nuestra 
 aplicacion como si de la consola del navegador se tratase*/

var params = process.argv.slice(2); /*Creamos un objeto de tipo process.argv que hace la lectura
los  parametros que pasemos con la consola .el metodo slice cortara los datos anterior a 
los que esten en la posicion 2, empezará a partir de la segunda posicion, esto es por que por ej
en la pos 1 se encuentra la ruta en nuestro pc de nuestro fichero y no queremos eso para nada
por ejemplo al mostrarlo lo que este en params*/

var numero1 = parseFloat(params[0]); //Float por que vamos a hacer ops y puede dar resul decimal
var numero2 = parseFloat(params[1]);

/*Tambien imprime templates si lo pasamos por consola*/
var calculadora = `
La suma de los 2 parametros da: ${numero1 + numero2}
La resta de los 2 parametros da: ${numero1 - numero2}
La multiplicación de los 2 parametros da: ${numero1 * numero2}
La division de los 2 parametros da: ${numero1 / numero2}
`

console.log(calculadora);

