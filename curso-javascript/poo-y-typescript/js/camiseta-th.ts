/*CLASES EN TYPESCRIPT

Estas tambien se pueden realizar con JS vanilla pero lo haremos asi para tener 
mayor compatibilidad con navegadores antiguos y para practicar con typeScript.
Una clase es un molde de algo en particular donde se ubicaran propiedades o
caracteristicas de la clase y tambien metodos para realizar diversas acciones
que podrán ser usadas por los objetos sacados de esa clase.
Los objetos son entidades sacadas del molde o clase, los objetos sacados del mismo
molde compartiran propiedades y metodos similares.
Las propiedades podran tener 3 modificadores de acceso, 
Public: que hara que las 
propiedades sean usables y visibles desde cualquier clase y lugar
Protected: solo podran ser usados por clases que hereden de la misma
Private: solo podran ser usados por la misma clase y en el mismo ambito o bloque
*/

//Clase, siempre se llama igual que el fichero pero empezando por mayus
/*Tambien podemos exportar la clase para poderla reutilizar en otro fichero
de añadiendo delante  de la palabra reservada class, la palabra reservada 
export, quedaria asi pero de momento lo comento  por que no vamos a exportar
nada
export class Camiseta{} */ 

/*INTERFACES
Contrato en el cual se define que métodos y funciones debe de incluir si o si 
una clase, en caso de que no esten establecidos en su clase el transpilador dara
error aunque si compilara, se declaran con la palabra reservada interface
seguido del nombre que queramos y de la invicacion de los metodos que escojamos
que debera tener incorporados la clase.
Para adjuntarle este contrato a la clase deberemos añadir la palabra reservada
implements + el nombre de la interfaz seguido del nombre de la clase */

interface CamisetaBase{
	setColor(color);
	getColor();
}

/*DECORADORES
Los decoradores son funciones que añaden funcionalidad y caracteristicas a
nuestras clases, esto puede ahorrar la necesidad de heredar, se usa con 
frecuencia en angular. hacen puntero o target a los metodos de la clase, 
luego definimos un nombre para ese metodo que se podrá usar en los objetos
 y luego establecemos lo que queremos que haga ese metodo, en este caso una
 impresion de texto por consola. 
 Siempre se declaran antes de la creacion de la clase.
 Si no tiene requiere argumentos no es necesario poner () en su invocacion
 previa a la clase, quedaria asi. @estampar  sin ()
*/

function estampar(logo: string){ // Si queremos que tenga parametro
// sin parametros se definiria asi,  function estampar(target: Function){
	return function(target: Function){ 
target.prototype.estampacion = function(): void{
	console.log('Camiseta estampada con el logo '+logo);
	}
}
}

//Creacion de la clase implementando la interfaz creada
@estampar('Gucci') //no se cierra con punto y coma
class Camiseta implements CamisetaBase{ 

	//Propiedades (cáracteristicas del objeto)
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	/*Métodos (funciones o acciones del objeto)
	si queremos poder acceder con un objeto de la clase deberemos ponerle
	modificador de acceso public*/

	/*Metodo Constructor
	Es el primer metodo que se debe crear, se llama automaticamente al instanciar
	un objeto de la clase y nunca devuelve nada.
	Tiene como objetivo dar valor o inicializar las propiedades declaradas en la 
	clase. Para declarar este  metodo habra que usar la palabra reservada 
	constructor*/

	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	/*Metodos Setters y Getters, los primeros se usar para cambiar valores de los atributos
	y los segundos para obtener esos valores y poder reusarlos en otro lugar 
	almacenandolos por ejemplo, en una variable*/
	public setColor(color){
		this.color = color;
	}

	public getColor(){
		return this.color;
	}
}

/*Creacion o instanciacion del objeto, lo puedes llamar como quieras al igual
que una variable, pero siempre seguido de new y el nombre de la Clase(), 
eso indica que es un objeto que deriva de ese molde o clase y podrá acceder a sus
propiedades y metodos*/

var camiseta = new Camiseta('Amarillo', 'Manga larga', 'Puma','L', 25);

/*podemos inicializar las propiedades de manera manual siempre y cuando tengan
modificador de acceso public, si fuera private en la clase, solo podriamos 
acceder a su interaccion mediante metodos*/

/*
camiseta.color = 'Rojo';
camiseta.modelo = 'Manga Larga';
camiseta.marca = 'Nike';
camiseta.talla = 'L';
camiseta.precio = '10';
*/

camiseta.setColor('Marron');
camiseta.estampacion(); //LLAMAMOS AL METODO CREADO CON EL DECORADOR
console.log(camiseta);

//console.log(camiseta.getColor()); 
/*Si usaramos camiseta.color en el console.log tambien nos mostraria lo mismo
que con getColor por que ya lo hemos seteado y se desbloquea*/

/*Si no inicializamos las variables no saldrá nada de las propiedades del objeto
hay que darles valor y luego al imprimir el objeto saldra todo lo que este 
seteado*/

var playera = new Camiseta();
/*
playera.color = 'Azul';
playera.modelo = 'Manga Corta';
playera.marca= 'Adidas';
playera.talla = 'L';
playera.precio = '20';
*/

	playera.setColor('Amarillo');

console.log(playera);

/*HERENCIA
Mediante la herencia podemos hacer que una clase herede de otra  clase todos 
sus atributos y metodos, y logicamente, este otra nueva clase podrá tener acceso
a todo lo de la anterior y ademas añadir sus propios atributos y metodos*/

class Sudadera extends Camiseta{

	public capucha: boolean;


	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}

	getCapucha(): boolean{
		return capucha;
	}
}
/*Podemos aplicarle el constructor que tenia la clase padre, de hecho si
imprimimos por consola el nuevo objeto entero, nos sacaria esas propiedades 
undefined si no las definimos previamente, pero ya las lista*/
var sudadera_nike = new Sudadera('Rojo', 'Manga larga', 'Nike', 'L', 30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor('Gris jaspeado') //Metodo heredado
console.log(sudadera_nike);







