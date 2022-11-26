'use strict'

var mongoose = require('mongoose');
/*require es una funcion de node.js y de este modo cargamos la libreria en la variable moongose,
es decir hacemos un objeto de tipo moongose*/
var app = require('./app'); //Importamos las funciones de express y bodyparser con un nuevo objeto
var port = 3700; //localhost:3700

//mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
		.then(() => {
			console.log('Conexion a la BBDD establecida con éxito');

			//Creacion del servidor
			app.listen(port, () =>{ //esto recibe 2 parametros, uno el puerto y 2 un callback
				console.log('Servidor corriendo correctamente en la url: localhost 3700');
			});

		})
		.catch( err => console.log(err));