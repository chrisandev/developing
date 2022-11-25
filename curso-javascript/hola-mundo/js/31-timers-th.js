'use strict'

/*TIMERS o temporizadores
Estos son eventos que establecen un tiempo para que ocurra lo que establezcamos
dentro de la funcion de callback dentro, hay 2 setInterval que realizará la 
instruccion en bucle cada x tiempo que le pasemos como parametro, o setTimeout,
que relizará la accion una única vez, tambien cuando transcurra el tiempo que le
pasemos por parametro*/

	window.addEventListener('load', function(){

		//setInterval

		var head= document.getElementById('cabecera');


		function empezarIntervalo(){

		var interval= setInterval(()=>{

			console.log('setInterval ejecutandose');

			if(head.style.background == 'yellow'){
				head.style.background = '#ccc';

			}else{
				head.style.background = 'yellow';
			}
		}, 2000);

		return interval;
		}


		// setTimeout

		var timeOut = setTimeout( function(){

			console.log('setTimeout ejecutado');

			head.style.fontSize='60px';
		}, 2000);



		//uso de botones para iniciar o detener esto

		var start= document.getElementById('start');

		var stop= document.getElementById('stop');

		var interval= empezarIntervalo();


		start.addEventListener('click', ()=>{

			alert('setInterval se ha iniciado');

			empezarIntervalo();
		});

		stop.addEventListener('click', ()=>{

			alert('setInterval se ha detenido');
			
			clearInterval(interval);
		})



	});

