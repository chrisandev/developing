'use strict';

/*Creamos un nuevo objeto de tipo Date y lo guardamos en una variable*/
var fecha = new Date(); 

/*Este objeto tiene distintos metodos como los que vemos, tambien muchos otros como
getMinutes, getSeconds.. etc, los podemos encontrar en google poniendo js date 
object*/
var año = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();


/*Usaremos un interpolador de variables, poniendo las comillas invertidas, se puede 
escribir sin problema, es como un campo de texto completo, y para concatenar variables
haremos ${variable}, luego cerramos la ultima comilla con punto y coma*/
var textoHora = ` 
	El año es: ${año}
	El mes es: ${mes}
	El dia es: ${dia}
	La hora es: ${hora}
`;

//Asi sacamos todo el campo de texto
console.log(textoHora);