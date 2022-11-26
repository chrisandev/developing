'use strict'
//Aqui definiremos los metodos para nuestros proyectos o documentos para manipular nuestra BBDD

var Project = require('../models/project'); /*Importamos el molde en una variable*/
var fs = require('fs'); /*importamos la libreria fs "filesystem" para poder borrar la imagen
en caso de que no sea de la extension adecuada, node no puede hacer esto sin una dependencia*/
var path = require('path');

var controller = { //Hacemos un json para usarse a modo de clase (como antes del ES6)

home: function(req, res){
	return res.status(200).send({//Tras la req, devuelve una respuesta numero 200 del protocolo http
		message: 'Soy la home' //Y sendea o lanza este mensaje
	});
},

test: function(req, res){
	return res.status(200).send({
		message: 'Soy el metodo o accion test del controlador de project'
	});
},

saveProject: function(req, res){

	var project = new Project(); //Creamos un objeto project del model o clase Project

	var params = req.body; //recogemos todos los parametros pasados en el body de postman
	project.name = params.name; //Los inicializamos con postman pasando por el body
	project.description = params.description;
	project.category = params.category;
	project.year = params.year;
	project.langs = params.langs;
	//project.image = null; Asi está en el curso
	project.image = params.image;

	project.save((err, projectStored) => { //save recoge errores o projectStored para guardarlo
		/*Diseñamos varias respuestas por si ocurrieran errores 500 y 404 del protocolo http*/
		if(err) return res.status(500).send({
			message:'Error al guardar'
		});

		if(!projectStored) return res.status(404).send({
			message: 'No se ha podido guardar el proyecto'
		});	
	//y si todo es 200 (ok) pues pasamos nuestro objeto project como projectStored para guardarlo
		return res.status(200).send({project: projectStored}); 
	});

	return res.status(200).send({
		project: project, /*Enviamos por respuesta un objeto de tipo project de nombre project 
		que es como lo hemos llamado valga la redundancia. */
		message: 'Metodo saveProject' //message  es como poner console.log en postman
	});
},

getProject: function(req, res){
	var projectId = req.params.id; //Almacenamos el id pasado por parametro en la url
	//Metodo de mongoose para buscar por Id en la BBDD, recibe 2 parametros, el id y un callback

	//Este if es por si no introducimos el id por param ya que lo hemos puesto opcional
	if(projectId == null) return res.status(404).send({message: 'El proyecto no existe'});

	Project.findById(projectId, (err, project) => {
		if(err) return res.status(500).send({message: 'Error al devolver los datos'});

		if(!project) return res.status(404).send({message: 'El proyecto no existe'});

		return res.status(200).send({project});
	});
},

getProjects: function(req, res){

	//Project.find({year: 2019}) asi nos sacaria todos los del año 2019 por ej
	//o .sort('-year') Asi se ordenarian por años de mayor a menor
	Project.find({}).exec((err, projects) => { //nos dara un error o una coleccion de objetos project
		if(err) return res.status(500).send({message: 'Error al devolver los datos'});

		if(!projects) return res.status(404).send({message: 'No hay projectos para mostrar'});

		return res.status(200).send({projects});
	});
},

updateProject: function(req, res){
	var projectId = req.params.id;
	var update = req.body;
//findByIdAndUpdate es un metodo de mongoose, hay muchos en la documentacion
//el parametros new:true es para que nos devuelva el objeto nuevo en vez  del viejo al updatearlo
	Project.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdated) => {
		if(err) return res.status(500).send({message: 'Error al actualizar'});

		if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto a actualizar'});

		return res.status(200).send({
			project: projectUpdated
		});
	});
},

deleteProject: function(req, res){
	var projectId = req.params.id; //recogemos el id por parametro

	Project.findByIdAndRemove(projectId, (err, projectRemoved) => { //Metodo de mongoose
		if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

		if(!projectRemoved) return res.status(404).send({message: 'No se puede eliminar ese proyecto'});

		return res.status(200).send({
			project: projectRemoved
		});
	});
},
/*Metodo para subir imagenes a uno de nuestros docs en la BBDD usando el modulo connect multiparty
, NodeJS por defecto no tiene la opcion de hacer esto, por eso usamos una libreria*/
uploadImage: function(req, res){
	var projectId = req.params.id; //Recogemos la id de nuestro doc de la BBDD
	var fileName = 'Imagen no subida...'; //Mal nombre para esta variable por que luego hay otra

/*Lo que nos permite connect multiparty es poder recoger archivos por la request con el metodo
req.files*/

	if(req.files){ //Si existen en la request, para ello hay que configurar un middleware del
		//connnect multiparty
		var filePath = req.files.image.path;
		var fileSplit = filePath.split('\\'); /*indicamos desde donde cortamos para sacar el name
		 "path": "uploads\\VCvoiYYxAgfSRX8AaPTbE-tP.jpg", de lo que sale en postman*/
		var fileName = fileSplit[1]; /*Elegimos cual es el name de los que hay, como es el segundo
		pues esta en el indice 1 (esta la palabra uploads y el nombre del archivo*/

		/*VAMOS A MEJORAR LA VALIDACION PIDIENDO QUE LA IMG TENGA UNA EXTENSION VALIDA*/
		var extSplit = fileName.split('\.'); //Ahora cortamos desde este punto
		var fileExt = extSplit[1]; //y guardamos la extension desde el punto cortado

		if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

	Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {

			if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

			if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe'});

			return res.status(200).send({project: projectUpdated});
		});

		}else{
			fs.unlink(filePath, (err) => {
				return res.status(200).send({message: 'La extension no es válida'});
			});
		}

	}else{
			return res.status(200).send({
			message: fileName
		});
}
},

	getImageFile: function(req, res){
		var file = req.params.image;
		var path_file = './uploads/' + file;

		fs.exists(path_file, (exists) => {
			if(exists){
				res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: 'No existe la imagen..'
				});
			}
		});
	}

};

module.exports = controller; /*a estas clases se les llama modules pero.. son cl ases y en este
caso nisiquiera eso, ya que es un JSON que actua como clase, dentro de controllers, tendremos la
mayoria de metodos para manipular las peticiones de nuestros proyectos o documentos de la BBDD*/ 
