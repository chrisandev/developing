'use strict'

/*CREACION DE CLASES EN JSON USANDO TYPESCRIPT
Primero de todo, indicar que typeScript es un superset realizado por Microsoft
que  le da a JS un tipado fuerte para realizar funciones del EMS6 (los ultimos
standares), y además se usa bastante en el framework angular.

Usar JSON es la manera más sencilla de generar una clase o molde dentro de la 
programacion orientada a objetos, dentro de estas clases logicamente tambien 
podriamos crear funciones o metodos de todo tipo.*/

//Creamos una clase usando JSON

var bicicleta = {
	color: 'Rojo',
	frenos: 'de disco',
	modelo: 'BMX',
	velocidadMaxima: '60km',

/*Ahora hacemos una funcion que cambie su color al pasado por parametro y que,
además muestre por consola todo el objeto JSON*/
	cambiaColor: function(nuevo_color){ //No se puede usar arrow function en esto
		//bicicleta.color = nuevo_color;
		this.color = nuevo_color;
		console.log(this);
	}
	};

	bicicleta.cambiaColor('Azul');



