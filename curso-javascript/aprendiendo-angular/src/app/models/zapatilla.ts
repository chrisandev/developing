export class Zapatilla{ //Creamos una  clase o molde zapatilla
/*
	public nombre: string;
	public marca: string;
	public color: string;
	public precio: number;	
	public stock: boolean;

	constructor(nombre, marca, color, precio, stock){
		this.nombre=nombre;
		this.marca=marca;
		this.color=color;
		this.precio=precio;
		this.stock=stock;
	}
*/
	constructor( 
	public nombre: string,
	public marca: string,
	public color: string,
	public precio: number,	
	public stock: boolean
	){}
	/*Asi se declaran y se setean las propiedades automaticamente cuando instanciemos un
	objeto pasando por argumento estas propiedades. Se ahorra bastante codigo*/

}