'use strict'

window.addEventListener('load', function(){

	//TIMERS, SET INTERVAL Y SET TIMEOUT

	function intervalo(){ /*Hacemos una funcion donde invocamos a la funcion 
		setInterval*/

		var tiempo = setInterval(function(){ /*setInterval establece una cantidad
		de tiempo para realizar lo que indiquemos dentro  de la funccion*/

		console.log('Set interval ejecutado');

		var encabezado = document.querySelector('h1'); //Si podemos acceder al DOM lo menos posible mejor

		if(encabezado.style.fontSize == '50px'){
			encabezado.style.fontSize = '30px';
		}else{
			encabezado.style.fontSize = "50px";
		};	


		}, 1500); //los 3000 son milisegundos, es decir, 3 segundos.

			return tiempo;
		}

		var tiempo = intervalo();

	var stop = document.querySelector('#stop');

	stop.addEventListener('click', function(){
		alert('Has parado el intervalo en bucle');
		clearInterval(tiempo); 
		}); /*Metodo que para los intervalos, hay que pasale por parametro
	la variable que contiene el intervalo*/	


	var start = document.querySelector('#start');

	start.addEventListener('click', function(){
		alert('Has iniciado el intervalo en bucle');
		intervalo();
	});
	});