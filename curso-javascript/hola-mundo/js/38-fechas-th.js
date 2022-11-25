'use strict'

/*Uso de un objeto Date()
Este objeto almacena una coleccion de datos relacionados  con la fecha y hora,
mediante algunos de sus metodos podremos acceder a esos datos
Lo primero será crear un objeto date para poder asignarle metodos
Si usamos el metodo del propio objeto date, entonces se nos devolveran todos los 
datos que proporciona ese objeto de una, sin embargo si queremos ir escongiendo 
cada uno de sus metodos, deberemos de crear una variable que inicialice ese objeto
y de ese modo, usando este nuevo objeto  date podremos usar sus metodos uno a uno
sacando lo que nos interese de el.*/

var date= new Date();

var year= date.getFullYear();
var day= date.getDay();
var hours= date.getHours();
var month= date.getMonth();

var textoDate= `
	El año actual es: ${year}
	El dia actual es: ${day}
	La hora actual es: ${hours}
	El mes actual es: ${month}
`;

console.log(textoDate);
console.log(date); //Asi sacariamos toda la info que proporciona este objeto




