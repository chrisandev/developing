'use strict'

var edad= 24;
var texto;

switch(edad){
	case 18:
	texto='Eres mayor de edaed';
	break;

	case 24:
	texto='Eres mayorcete';
	break;

	case 65:
	texto='Estas jubilado';
	break;

	default:
	texto='Tu edad es otra';
}

document.write('<h3>'+texto+'</h3>');