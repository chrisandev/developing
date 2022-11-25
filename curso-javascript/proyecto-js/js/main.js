$(document).ready(function(){

	//SLIDER

  if(window.location.href.indexOf('index') > -1 ){/*Esto solo se debe cargar
    en la pantalla index, asi que creamos este if*/

  $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    response: true
  });

  }

  //POSTS

    if(window.location.href.indexOf('index') > -1 ){/*Esto solo se debe cargar
    en la pantalla index, asi que creamos este if*/

  var posts =[
  {
  	title: 'Prueba de titulo 1',
  	//date: new Date(),
  	//date: 'Publicado el dia '+moment().format('MMMM dddd YYYY'), 
  	date: 'Publicado el dia '+ moment().date() + ' de '+ moment().format('MMMM') + ' del '+ moment().format('YYYY'),
  	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu interdum eros, et ullamcorper justo. Aliquam erat volutpat. Nam tincidunt velit non lobortis lobortis. Sed viverra a leo at placerat. Nulla facilisi. Vivamus porta quam sed lobortis aliquet. Fusce non iaculis lectus. Suspendisse condimentum faucibus sapien, eget sollicitudin diam malesuada ut. Nam facilisis elit ut augue vestibulum accumsan. Vestibulum id augue lorem. Vestibulum at pellentesque arcu. Pellentesque efficitur ac libero eget consectetur.'
  },
    {
  	title: 'Prueba de titulo 2',
  	date: 'Publicado el dia '+ moment().date() + ' de '+ moment().format('MMMM') + ' del '+ moment().format('YYYY'), 
  	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu interdum eros, et ullamcorper justo. Aliquam erat volutpat. Nam tincidunt velit non lobortis lobortis. Sed viverra a leo at placerat. Nulla facilisi. Vivamus porta quam sed lobortis aliquet. Fusce non iaculis lectus. Suspendisse condimentum faucibus sapien, eget sollicitudin diam malesuada ut. Nam facilisis elit ut augue vestibulum accumsan. Vestibulum id augue lorem. Vestibulum at pellentesque arcu. Pellentesque efficitur ac libero eget consectetur.'
  },
    {
  	title: 'Prueba de titulo 3',
  	date: 'Publicado el dia '+ moment().date() + ' de '+ moment().format('MMMM') + ' del '+ moment().format('YYYY'), 
  	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu interdum eros, et ullamcorper justo. Aliquam erat volutpat. Nam tincidunt velit non lobortis lobortis. Sed viverra a leo at placerat. Nulla facilisi. Vivamus porta quam sed lobortis aliquet. Fusce non iaculis lectus. Suspendisse condimentum faucibus sapien, eget sollicitudin diam malesuada ut. Nam facilisis elit ut augue vestibulum accumsan. Vestibulum id augue lorem. Vestibulum at pellentesque arcu. Pellentesque efficitur ac libero eget consectetur.'
  },
    {
  	title: 'Prueba de titulo 4',
  	date: 'Publicado el dia '+ moment().date() + ' de '+ moment().format('MMMM') + ' del '+ moment().format('YYYY'), 
  	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu interdum eros, et ullamcorper justo. Aliquam erat volutpat. Nam tincidunt velit non lobortis lobortis. Sed viverra a leo at placerat. Nulla facilisi. Vivamus porta quam sed lobortis aliquet. Fusce non iaculis lectus. Suspendisse condimentum faucibus sapien, eget sollicitudin diam malesuada ut. Nam facilisis elit ut augue vestibulum accumsan. Vestibulum id augue lorem. Vestibulum at pellentesque arcu. Pellentesque efficitur ac libero eget consectetur.'
  },
    {
  	title: 'Prueba de titulo 5',
  	date: 'Publicado el dia '+ moment().date() + ' de '+ moment().format('MMMM') + ' del '+ moment().format('YYYY'), 
  	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu interdum eros, et ullamcorper justo. Aliquam erat volutpat. Nam tincidunt velit non lobortis lobortis. Sed viverra a leo at placerat. Nulla facilisi. Vivamus porta quam sed lobortis aliquet. Fusce non iaculis lectus. Suspendisse condimentum faucibus sapien, eget sollicitudin diam malesuada ut. Nam facilisis elit ut augue vestibulum accumsan. Vestibulum id augue lorem. Vestibulum at pellentesque arcu. Pellentesque efficitur ac libero eget consectetur.'
  },
     {
  	title: 'Prueba de titulo 6',
  	date: 'Publicado el dia '+ moment().date() + ' de '+ moment().format('MMMM') + ' del '+ moment().format('YYYY'), 
  	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu interdum eros, et ullamcorper justo. Aliquam erat volutpat. Nam tincidunt velit non lobortis lobortis. Sed viverra a leo at placerat. Nulla facilisi. Vivamus porta quam sed lobortis aliquet. Fusce non iaculis lectus. Suspendisse condimentum faucibus sapien, eget sollicitudin diam malesuada ut. Nam facilisis elit ut augue vestibulum accumsan. Vestibulum id augue lorem. Vestibulum at pellentesque arcu. Pellentesque efficitur ac libero eget consectetur.'
  },
  ];

  posts.forEach((element, index) =>{

  	//Usamos como plantilla un article de class post del DOM y vamos incrustando
  	//datos 

  	var post = `
  		<article class='post'>
			<h2>${element.title}</h2>
			<span class='date'>${element.date}</span>
			<p>
			${element.content}
			</p>
			<a href='#' class='button-more'>Leer más</a>
		</article>
  	`;

  	$('#posts').append(post);

  });

}

  		//SELECTOR DE TEMA

  		var theme = $('#theme');
  		$('#to-green').click(function(){
  			theme.attr('href', 'css/green.css');
  		})

  		$('#to-red').click(function(){
  			theme.attr('href', 'css/red.css');
  		})

  		$('#to-blue').click(function(){
  			theme.attr('href', 'css/blue.css');
  		})

      //SCROLL ARRIBA DE LA WEB

      $('.subir').click(function(e){ //la e, es para usar el prevent default
        e.preventDefault(); // y que no rediirija a otro lado, ya se vio

        $('html, body').animate({ /*Será necesario usar la funcion animate y 
          pasarle el objeto scrolltop*/
          scrollTop: 0 //El 0 simboliza subir hasta el punto 0, y el 500 son 
          //los ms que tarda
        }, 500);

        return false; //tambien para el prevent default
      });

      //LOGIN FALSO

      $('#login form').submit(function(){
        var form_name = $('#form_name').val();

        localStorage.setItem('form_name', form_name);
      })

      var form_name = localStorage.getItem('form_name');

      //Comprobamos si form_name es null
      if(form_name != null && form_name != 'undefined'){
        var about_parrafo = $('#about p');

        $('#about p').html('<br><strong>Bienvenido, '+ form_name+'</strong> ');
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $('#login').hide();

        $('#logout').click(function(){
          localStorage.clear();
          location.reload();
        })
      }

      //ACORDEON

      /*Esto solo se ha de cargar en nuestra pantalla about, y no en la de 
      index, por ello creamos este condicional*/

      if(window.location.href.indexOf('about') > -1 ){
        $('#acordeon').accordion();
      }

      //RELOJ

      if(window.location.href.indexOf('clock') > -1 ){

        setInterval(function(){

        var clock= moment().format('hh:mm:ss');
        $('#clock').html(clock);
        
        }, 1000);

      }

      //VALIDACION DE FORMULARIO

      if(window.location.href.indexOf('contact') > -1 ){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });


        $.validate({ /*Todo lo que metamos en el JSON son propiedades, que algunas
          no son necesarias, en su la función es validate()*/
          lang: 'es',
          errorMessagePosition: 'top', 
          scrollToTopOnError: true
        });
    
      }

   
})