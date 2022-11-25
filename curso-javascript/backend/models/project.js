//Creando un nuevo modelo estamos creando una especie de clase para instanciar nuevos
// documento en la BBDD

'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //tenemos que usar el metodo Schema de mongoose

//Molde para crear documentos de este tipo (tipo Project, ya que tenemos una coleccion llamada projects)
var ProjectSchema = Schema({ /*Tiene las mismas propiedades que nuestra coleccion, Schema es un tipo
	de dato de el el modulo importado mongoose creo*/
	name: String,
	description: String,
	category: String,
	year: Number,
	langs: String,
	image: String
})

module.exports = mongoose.model('Project', ProjectSchema); //Lo  primero es el nombre que le damos,
//Lo segundo el nombre de nuestro molde o esquema

/*¿Por que usamos la entidad Project para guardarla en nuestra coleccion projects de la BBDD, 
pues logicamente.. en caso de que no hubiera una coleccion llamada asi, mongoose crearia una nueva
pluralizando el nombre, en este caso añadiendo la entidad Project crearia Projects con un nuevo 
documento?*/