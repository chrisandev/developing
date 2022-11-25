//TIPOS DE VARIABLES


/*Podemos crear tipos de datos almacenandolos en una variable que luego podriamos
reutilizar para definir el tipo de dato en  otra variable, con la tuberia se puede asignar otros tipos de datos, hacer que sean 
validos, principio sirve para todos los tipos de variable*/

type alfanumerico = string | number;

//STRING

let cadena: alfanumerico ='Victorroblesweb.es'; //Asi usamos el tipo de dato almacenado
//en una variable
//let cadena: string ='Victorroblesweb.es';

cadena=12;

// NUMBER
let numero: number = 12;

//BOOLEAN
let verdadero_falso: boolean = true;

//ANY, O CUALQUIER COSA
let cualquiera: any = 'hola';
cualquiera = 77;

//ARRAY
var lenguajes: Array<string> = ['PHP', 'JS', 'CSS'];
let cifras: number[] = [1,2,3];
var detodo: Array<any> = ['Christian', 2, 'coche', 12];

/*LET VS VAR
Let es un tipo de variable que solo puede usarse a nivel de bloque y Var se usa
de manera global, por lo demás es lo mismo*/

var numero1= 10;
var numero2= 12;

if(numero1==10){
	var numero1 =44;
	let numero2 =55;

	console.log(numero1, numero2);
}
	console.log(numero1, numero2);







console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, cifras, detodo);