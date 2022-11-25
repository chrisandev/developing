var bicicleta = {
	color: 'Rojo',
	modelo: 'BMX',
	frenos: 'de disco',
	velocidadMaxima: '60km',
	/*Asi metemos una funcion dentro de un JSON, esta declarada igual que 
	cualquier otra variable en el*/
	cambiaColor: function(nuevo_color){ 
		// bicicleta.color = nuevo_color
		this.color = nuevo_color;
		console.log(this);
	}
};

bicicleta.cambiaColor('Azul');

