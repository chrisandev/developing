$(document).ready(function(){

var parrafos = $('p');

parrafos.click(function(){

	var that = $(this);

if(!that.hasClass('grande')){

	that.addClass('grande');

}else{

	that.removeClass('grande');
}

});


});