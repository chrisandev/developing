'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
/*configuramos el  middelware de la libreria connectmultiparty para que se ejecute antes que 
la request, recordemos que son metodos que se ejecutan antes*/
var multipartMiddleware = multipart({ uploadDir: './uploads'}); /*Cuando añadamos la img desde  
el postman se subiran directamente al directorio que escohamos*/

//El parametro de nombre de ruta podemos establecer el que queramos, no va ligado a nada
router.get('/home', ProjectController.home); //Solo funcionara con get
router.post('/test', ProjectController.test); //Solo con post
router.post('/save-project', ProjectController.saveProject); /*La ruta se llamara como el primer
parametro, y luego usamos un metodo (funcion en las clases) del objeto ProjectControler*/
router.get('/project/:id?', ProjectController.getProject);/*:id? significa : que es un parametro
, y ? que es opcional*/
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
/*Aqui pasamos primero por parametro el middelware para que cargue los files a subir por post*/
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage); 
router.get('/get-image/:image', ProjectController.getImageFile);


module.exports = router; //Ya podemos usar la variable router con toda la config de rutas fuera de aqui