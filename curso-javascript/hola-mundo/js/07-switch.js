'use strict'

//Switch, condicional  que se usa para valorar varias opciones en un mismo cuadro, tantos casos como queramos.

var edad=40;
var imprime="";

switch(edad){
	case 18:
	imprime="Acabas de cumplir la mayoria de edad";
	break; //Tras cada caso, siempre hay un break
	case 25:
	imprime="Ya eres un adulto";
	break;
	case 40:
	imprime="Crisis de los 40";
	break;
	case 75:
	imprime="Eres ya un anciano";
	break;
	default: //Es como el else, cuando ningun caso se cumple, pasará a cumplirse el caso  default
	imprime="Tu edad es neutra"
	break;
}

	console.log(imprime);

