'use strict'

/*PLANTILLAS  DE TEXTO
Son moldes donde podemos añadir texto mediante `` e interpolar variables 
mediante ${nombre variable} y el nombre de la variable, es parecido a 
concatenar.
De este modo podemos almacenar una gran cantidad de texto con distintas
variables de una manera más optima.*/

var nombre= prompt('Introduce tu nombre');
var apellidos= prompt('Introduce  tus apellidos');

var texto= `
<h1>Hola que tal?</h1>
<h3>Mi nombre es: ${nombre}</h3>
<h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);