/*CREACION DE CLASES, atributos y metodos en TS*/

/*Interfaces
son un contrato que define que funciones o metodos deberán existir en los metodos
de una clase, en caso de que alguno de ellos no esten creados en la clase el 
compilador dará un error. Esto se emplea para hacer codigos mas robustos y con 
mas filtros*/

/*Creacion de la interfaz*/

interface CamisetaBase{
	setColor(color);
	getColor();
}

/*Creacion del decorador sin argunemtos*/
function estampar2(target: Function){
	target.prototype.estampacion2= function() :void{
		console.log('Imprimo esto gracias al decorador')
	}
}

/*Decorador con argumento*/
function estampar(logo : string){
	return function(target :Function){
		target.prototype.estampacion = function() :void{
			console.log('El logo es: '+logo)
		}
	}
}

//Creacion de la clase

/*Instanciamiento del decorador sin argumento 
@estampar2*/ 
@estampar('Adidas')
class Camiseta implements CamisetaBase{

	//Atributos de clase
	private marca: string;
	private modelo: string;
	private color: string;
	private talla: string;
	private precio: number;

	//Metodo Constructor

	constructor(marca, talla, color, modelo, precio){
		this.marca = marca;
		this.talla = talla;
		this.color = color;
		this.modelo = modelo;
		this.precio = precio;
	}

	//Métodos Setters y Getters
	setColor(color){
		this.color = color;
	}

	getColor(){
		return this.color;
	}
}

	//Instanciamiento o creacion de un objeto de la clase

	var camisetaMolona = new Camiseta('Niko', 'Deportiva', 'XL', 'Amarillo', 55);

	camisetaMolona.setColor('Verde electrico');

	console.log(camisetaMolona.getColor());

	camisetaMolona.estampacion();
	console.log(camisetaMolona);

	var camisetaPlayera = new Camiseta('Springfield', 'Polo', 'Amarillo', 'XL', 40);

	console.log(camisetaPlayera);

	/*HERENCIA, con ello obtendremos todos los metodos y atributos de la clase 
	padre.
	Creacion de la clase hija, para heredar usaremos la palabra reservada extends
	seguido del nombre de la clase padre*/

	class Sudadera extends Camiseta{
		//Propiedades
		private capucha: boolean;
		///Metodos
		public setCapucha(capucha: boolean){
			this.capucha = capucha;
		}
		public getCapucha(){
			return capucha;
		}
	}

	var sudadera_adidas = new Sudadera('Adidas', 'L', 'Azul', 'Manga larga', 40);

	sudadera_adidas.setColor('Gris jaspeado');
	sudadera_adidas.setCapucha(true);

	console.log(sudadera_adidas);

