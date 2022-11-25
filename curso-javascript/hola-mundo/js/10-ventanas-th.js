'use strict'

/*Tipos de funciones de ventana ALERT, CONFIRM, PROMPT

funcion ALERT, Ventana emergente a la cual le podemos pasar parametros,
y que mostrará por pantalla lo que le mostremos.*/

alert('Esto es una ventana emergente ALERT');

/* Ventana de CONFIRMACION, se realiza con la función CONFIRM
Devuelve un valor boolean, si aceptamos true, si cancelamos false*/

var mi_resultado = confirm('Estas seguro de querer continuar?');
console.log(mi_resultado);

/*Ventana de INGRESO DE DATOS, funcion PROMPT 
Devuelve un valor string, podemos parsearlo como ya sabemos a otro valor.
Tambien debemos saber que la funcion prompt permite el ingreso de 2 
parametros, el primero es de tipo string y el segundo de tipo number, el 
cual será el valor que se verá por defecto para el usuario.*/

var mi_ingreso = prompt('¿Que edad tienes?', 18); 
console.log(typeof mi_ingreso);