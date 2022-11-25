'use strict'

//Plantillas de texto

var nombre= prompt("Mete tu nombre");

var apellidos= prompt("Mete tus apellidos");

//var texto= "Mi nombre es: "+ nombre+"<br/> Mis apellidos son: "+apellidos; //FORMA CLASICA

//USANDO PLANTILLA
var texto= ` 
<h1>Hola que tal</h1>
<h3>Mi hombre es: ${nombre}</h3>
<h3>Mis apellidos son: ${apellidos}</h3>
`



document.write(texto);