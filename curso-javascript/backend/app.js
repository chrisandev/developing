//Configuracion de express y de peticiones con body-parser

'use strict'

var express = require('express'); 
var bodyParser = require('body-parser'); 
/*Creando objetos del tipo de la dependencia cargamos los modulos ubicados en node y podemos 
usar los metodos de las librerias mediante el uso de este objeto */
var cors = require('cors');

var app = express();
//app.use(cors());


/*Esto es lo de Juan*/
app.use(cors({
    //origin:['http://localhost:3700'],
    credentials:true
}));

app.use(function (req, res, next) {

  //res.header('Access-Control-Allow-Origin', 'http://localhost:3700');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials',true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

//Hasta aqui lo de Juan


//Cargar archivos de rutas
var project_routes = require('./routes/project');

//Middlewares, metodo que se ejecuta antes de que se ejecute la peticion ajax
//Creacion de middelware global
app.use(bodyParser.urlencoded({extended:false})); //Esto simplemente es una config necesaria para bparser
app.use(bodyParser.json());//Cualquier tipo de peticion que me llegue, primero transformara los datos a json

// Configurar cabeceras y cors (Esto tb es un middleware!)
/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
*/

//Rutas
app.use('/api', project_routes); //Esto implica que antes que /test o /home debemos poner /api

/* DE MOMENTO LAS COMENTAMOS, VAMOS A MONTARLAS EN PROJECT.JS
app.get('/', (req, res) =>{ //Recibe una request y una response
	res.status(200).send( //status 200 significa con exito
		"<h1>Hola mundo desde mi api de nodeJS</h1>"
	);
});

app.post('/test/:id', (req, res) =>{ //Recibe una request y una response
	console.log(req.body.nombre + ' ' + req.body.apellidos);/*Aqui podemos recoger la info que pasamos
	 por body en postman
	console.log(req.query.web)//Aqui sacamos los parametros pasados por url en postman
	console.log(req.params.id);//Recogemos el  parametros id pasado en la url
	res.status(200).send({ //status 200 significa con exito
		message: "Hola mundo desde mi api de nodeJS"
	});
});
*/


//Exportar
module.exports = app;