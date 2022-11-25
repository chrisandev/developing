'use strict'

/*CREACION DE CLASES USANDO JSON*/


//Creamos la clase o molde bicicleta mediante un JSON

var bicicleta = {
	modelo: 'BMX',
	color: 'asulito',
	frenos: 'de disco',
	material: 'carbono',
	velocidadMaxima: '300kms',

	cambiaColor: function(cambia_color){
		bicicleta.color = cambia_color;
		console.log(this);
	}
}

bicicleta.cambiaColor('marron');