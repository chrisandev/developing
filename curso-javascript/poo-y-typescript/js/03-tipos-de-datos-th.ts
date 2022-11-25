/*DECLARACION DE VARIABLES EN TYPESCRIPT
TIPOS DE DATOS*/

//String
var cadena: string = 'christianSanchez';

//Number
let numero: number = 12;

//Boleano
var verdadero_falso: boolean = false;

//Any (para forzar cualquier tipo de dato en una variable)
var cualquiera: any = 'hola';
cualquiera = 77;

//Arrays, tienen 2 formas de declaracion
var lenguajes: Array<string> = ['PHP', 'JS', 'CSS'];

let years: any[] = ['DOCE', 12, 15];

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years); 


/*Las variables pueden almacenar tantos tipos de datos como le indiquemos mediante
tuberias*/

let cadena_x: string | number | boolean = false;

console.log(cadena_x);


/*TAMBIEN PODEMOS CREAR NOSOTROS TIPOS DE DATOS Y APLICARLOS  DONDE QUERAMOS
Para ello usaremos la palabra reservada type*/

type alfanumerico = string | number; //Puede almacenar string y number

var textoNumero: alfanumerico = 15;

type arrayBool = any[] | boolean; //Puede almacenar array de lo que sea y bool

let coleccionBool: arrayBool = [2, 'php', true];

console.log(textoNumero, coleccionBool);

/*En caso de inicializar la variable con un tipo de dato  no correspondiente
el programa dará error*/

/*LET VS VAR
Let actua a nivel de bloque sin modificar nada global y var actua a nivel global*/
/*
var numero1= 10;
var numero2= 12;

console.log('Recien declarados '+ numero1, ' '+ numero2)

if(numero1 == 10){
	let numero1 = 44;
	var numero2 = 55;

	console.log('Dentro del IF con let '+ numero1, ' y con var  '+ numero2);
}

console.log('Fuera del IF '+ numero1, ' '+ numero2);
*/

var numero1 = 40;
var numero2 = 15;

console.log(numero1, numero2);

if(numero1 == 40){
	let numero1 = 1002;
	var numero2= 29;

	console.log(numero1, numero2);
}

console.log(numero1, numero2);




