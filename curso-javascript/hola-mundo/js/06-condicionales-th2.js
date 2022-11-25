'use strict'

/*Condicional IF
Es una estructura de control que comparar varias cosas, en que caso de que se cumpla
pasara algo que indiquemos, y en caso de que no se cumpla el programa hara otra cosa
que indicaremos tambien.

COMPARADORES RELACIONALES, estos son:
< Menor que
> Mayor que
== Igual que
!= Distinto que
<= Menor o igual
>= Mayor o igual*/

var edad=6;
var nombre='Luis Suarez';

if(edad>= 18){
	console.log(nombre+" tiene " +edad+ " años, es mayor de edad");
}else{
	alert(nombre+ " tiene "+edad+ " años, es menor de edad");
}

var edad1=4;

if(edad1<=33){
	console.log("Eres Millenial");

	if(edad1>=18){
		console.log('Eres mayor edad');
	}else if(edad1>=65){
		console.log('Estas jubilado');
	}else{
		console.log("Eres muy pequeño aun");
	}

}else{
	console.log("Ya no eres Millenial, te pasaste de edad");
}

/*El IF debe incluir obligatoriamente un ELSE, pero, entre cada IF y ELSE podemos anidar
distintos IF que deberan finalizar con un ELSE igualmente, y tambien podemos anidar tras
un IF los ELSE IF, que es pues para añadir otros condicionales y que pasen otras cosas
previas al ELSE final, donde no se indica ninguna condicion, simplemente simboliza,
si no es nada de lo anterior.. pues se ejecutará lo que salga en el ELSE

Si anidas un IF a otro IF es por que la condicion se cumple del primer IF, por 
lo que proseguira con la que ocurra en la anidacion

El ELSE IF es lo mismo que anidar un IF pero sin anidarlo, si no que se pone al
lado, como el else.*/