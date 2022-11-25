var express = require('express');
var app = express();
var server = require('http').Server(app);
/*var io = require('socket.io')(server);
Asi lo ha configurado el profesor pero como daba problemas de cors he tenido que aplicar lo de 
abajo*/

var io = require('socket.io')(server,{
    cors: { // Permite el acceso de orígenes mixtos (CORS)
        origin: '*'
    }
});

app.use(express.static('client'));

app.get('/hola-mundo', function(req, res){
	res.status(200).send('Hola mundo desde una ruta');
});

var messages = [{
	id: 1,
	text: 'Bienvenido al chat privado de Socket.io y NodeJS de Victor Robles..',
	nickname: 'Bot - victorroblesweb.es'
}];

io.on('connection', function(socket){
	console.log("El cliente con IP: " + socket.handshake.address + " se ha conectado...");

	socket.emit('messages', messages); /*Enviamos nuestro array de messages con el socket*/

	socket.on('add-message', function(data){
		messages.push(data);

		io.sockets.emit('messages', messages);
	});

});

server.listen(6677, function(){/*Podemos poner el puerto que queramos*/
	console.log('Servidor está funcionando en http://localhost:6677');
}); 