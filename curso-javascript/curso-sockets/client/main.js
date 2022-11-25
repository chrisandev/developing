var socket = io.connect('http://192.168.1.130:6677',{"forceNew":true}); /*Indicamos primer parametro 
la url del socket que es nuestra IP + el puerto donde se ubica, y el parametro  forceNew para que 
la conexion se fuerce */

socket.on('messages', function(data){
	console.log(data);
	render(data); //Usamos la funcion
});

function render(data){
	/*EL metodo map itera y saca 2 objetos o parametros, el contenido de cada mensaje en este caso,
	y el indice de cada uno, a estos parametros les podemos llamar como queramos.*/
	var html = data.map(function(message, index){
		return (`
			<div class="message">
				<strong>${message.nickname}</strong> dice:
				<p>${message.text}</p>	
			</div>
		`);
	}).join(' '); //Mete un espacio entre elemento y elemento

	var div_msgs = document.getElementById('messages');
	div_msgs.innerHTML = html;
	div_msgs.scrollTop = div_msgs.scrollHeight;
}

function addMessage(e){
	var message = {
		nickname: document.getElementById('nickname').value,
		text: document.getElementById('text').value,
	};

	document.getElementById('nickname').style.display = 'none';
	socket.emit('add-message', message);
	return false;

}