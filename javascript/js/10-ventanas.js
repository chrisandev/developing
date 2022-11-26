'use stric'

//ALERTA, FUNCION ALERT, funcion: hace una serie de instrucciones reutilizable tantas veces como queramos y podemos usar tantas alertas como queramos
//sirve para generar un pop up mostrando lo que introduzcamos

alert('Esta es mi alerta'); 
alert('Este es mi texto');

/*ALERTA DE CONFIRMACIÓN, FUNCION CONFIRM, devuelve un valor  true o false*/

confirm('¿Estás seguro de querer continuar?');

//Para almacenar el resultado hemos de crear una variable.
var mi_resultado=confirm('Estas seguro??');

console.log('mi_resultado'); //Para ver lo que indica el usuario

// INGRESO DATOS, FUNCION PROMPT, el resultado obtenido siempre es un string y se ha de parsear, podemos asignar un valor por defecto
//a la ventana emergente, en este caso 18.

var mi_resultado2=parseInt(prompt('¿Que edad tienes?',18));
console.log(typeof mi_resultado2); //type of hara que se indique de que tipo de dato se trata, en vez de el propio resultado
