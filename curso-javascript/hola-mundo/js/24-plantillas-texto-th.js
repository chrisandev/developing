'use strict'

/*PLANTILLAS TEXTO
En ellas podemos incluir una gran cantidad de texto a nuestro gusto
utilizando ``, tambien podremos interpolar variables con el uso de ${}
y el nombre de la variable entre las llaves, es parecido a concatenar*/

var nombre= prompt('Introduce tu nombre');
var apellidos= prompt('Introduce tus apellidos');
var texto= `
<h1>Hola que tal?</h1>
<h3>Mi nombre es ${nombre}</br>
Mis  apellidos son ${apellidos}`;

document.write(texto);
