'use strict'

var numero1=parseInt(prompt("Introduce un numero"));
var numero2=parseInt(prompt("Introduce otro numero"));

while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){

numero1=parseInt(prompt("Introduce un numero"));
numero2=parseInt(prompt("Introduce otro numero"));

}

var resultado= "La suma es = a "+(numero1+numero2)+ "<br/>"+
				"La resta es = a "+(numero1-numero2)+ "<br/>"+
				"La multiplicación es = a "+(numero1*numero2)+ "<br/>"+
				"La division es = a "+(numero1/numero2);

var resultado2= "La suma es = a "+(numero1+numero2)+"\n"+ //El \n es para los alert sobretodo, no reconocen los <br/>
				"La resta es = a "+(numero1-numero2)+"\n"+
				"La multiplicación es = a "+(numero1*numero2)+"\n"+
				"La división es = a "+(numero1/numero2);

console.log(resultado2); //La consola tampoco lee los <h1> por que no es una pagina web en si, por lo tanto si que lee los \n

alert(resultado2);

document.write("<h1>"+resultado+"</h1>");

