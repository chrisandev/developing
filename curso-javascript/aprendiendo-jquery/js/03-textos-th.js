$(document).ready(function(){

reloadLinks();

$('#add_button')
.removeAttr('disabled')
.click(function(){

$('#menu').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>');

reloadLinks();


});




function reloadLinks(){

$('a').each(function(){

var that= $(this);

var enlace= that.attr('href');

that.text(enlace);
});

};




});