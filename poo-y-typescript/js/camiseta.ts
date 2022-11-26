/*Interfaz
 Es un contrato en el que definimos que propiedades o metodos obligatorios tendrá
 una clase, en caso de que la clase no disponga de esos metodos o propiedaes el 
 programa nos advertirá de ello, se suele usar en programas muy rigurosos, con 
 standares muy medidos y controlados.*/
 interface CamisetaBase{
 	setColor(color);
 	getColor();
 }

 /*DECORADOR
  Patron de diseño que nos permite mediante unos datos que le definimos, a una
  clase hacer una copia de esa clase y modificarla o que haga unas funcionalidades
  u otras en funcion de los parametros que le pasemos.
  Creamos una funcion que exigirá que le pasemos un string.
  Esto devolverá una función anonima 
  Definimos que la funcion se llamará estampacion y que esta funcion no devolverá
  nada o será void.
  Y por ultimo definimos que hacer esta función que es hacer un console log, 
  diciendo el logo que le pasamos al principio*/
 function estampar(logo :string){
 	return function(target: Function){
 		target.prototype.estampacion = function():void{
 			console.log('Camiseta estampada con el logo de: '+logo);
 		}
 	}
 }

@estampar('Gucci Gang') /*No se cierra con punto y coma, se aplica directamente
a la clase siguiente*/

//Clase o molde del objeto
/*export*/ class Camiseta implements CamisetaBase{ /*Para poder importar esta clase
	a otro archivo, en este caso el Main.ts, Tambien implementamos la interfaz
	CamisetaBase */

		//Propiedades(Caracteristicas del objeto)
/*Esta es la sintaxis para la declaracion, modificador de acceso, nombre, y tipo
Public: podemos acceder a las propiedades y metodos desde cualquier clase, archivo
o lugar
Protected: Se puede acceder desde la clase que lo define o desde otra parte o clase
que herede de esa misma clase.
Private:  Los atributos o metodos solamente son accesibles desde la clase que los 
define, es decir, desde el molde.*/

		public color: string;
		public modelo: string;
		public marca: string;
		public talla: string;
		public precio: number;

		//Métodos (funciones o acciones que va a hacer el objeto)

		/*Constructor 
		Metodo que sirve para asignar valor a las propiedades
		del objeto, es el primer metodo en ser instanciado y es que se instancia
		a la vez que se instancia el objeto, se ha de parametrizar y esos valores
		serán los que se le pasen al objeto segun definamos en su construccion*/
		constructor(color, modelo, marca, tamaño, precio){
			this.color = color;
			this.modelo = modelo;
			this.marca = marca;
			this.tamaño = tamaño;
			this.precio = precio;
		}

		//Set Para darle un valor a una propiedad
		public setColor(color){
			this.color = color;
		}

		//Get para obtener el retorno de algo.
		public getColor(color){ //No entiendo por que se le pasa color por param.
			return this.color;
		}

}


/*
var camiseta = new Camiseta('rojo', 'manga larga', 'nike', 'L', '10'); 
Instanciamos la clase metiendola en una variable y rellenamos los parametros que 
nos pide el metodo constructor

camiseta.cambiarColor('Rojo'); //Luego le cambiamos el color a Rojo
//camisetagetColor();

var playera = new Camiseta();
playera.setColor('Azul');
*/

/*
camiseta.color = 'Rojo';
camiseta.modelo = 'Manga Larga';
camiseta.marca = 'Nike';
camiseta.talla = 'L';
camiseta.precio = '10';

var playera = new Camiseta();
playera.color= 'Azul';
playera.modelo = 'Manga Corta';
playera.marca = 'Adidas';
playera.talla = 'L';
playera.precio= '15';
*/


/*HERENCIA
Es una forma de crear clases hijas que hereden de una clase o entidad padre, 
de este modo heredaran sus propiedades y metodos creados en la entidad padre
de manera automatica, ahorrandonos codigo.*/

//Clase hija
class Sudadera extends Camiseta{
	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}

	getCapucha():boolean{
		return this.capucha;
	}
}

var camiseta= new Camiseta('azul','dasd','dasdsa','das',24);
camiseta.estampacion(); /*llamamos al decorador ('metodo estampacion')*/

var playera = new Camiseta('Amarilla', 'dassa', 'ggfgf', 'gsgg', 18)
/*Podemos crear diferentes objetos instanciando el mismo molde o clase principal*/

var sudadera_nike = new Sudadera('Naranja', 'dassa', 'ggfgf', 'gsgg', 12);
sudadera_nike.setColor('Amarilla');
sudadera_nike.setCapucha(true);
sudadera_nike.getCapucha;

console.log(sudadera_nike);
console.log(camiseta, playera);
