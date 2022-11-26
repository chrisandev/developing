/*Interfaces
Pequeño contrato que exije la incorporacion de algunos metodos o atributos
en la clase, se suele usar con metodos principalmente*/

interface cocheBase{
	setVelocidad(velocidad);
	setModelo(modelo:string);

}

//Creacion de la clase o el molde para hacer objetos derivantes

class Coche implements cocheBase{

	//Atributos

	public color: string;
	public modelo: string;
	public velocidad: number = 0; /*No se deben inicializar los atributos en su 
	declaracion dentro de la clase, se debe hacer en el metodo constructor*/


	//Metodos (Al menos se suele incluir el contructor, getters y setters)
	
	constructor(modelo: any = null){
		if(modelo == null){
			this.modelo = 'BMW generico';
		}else{
			this.modelo = modelo;
		}

		this.color = 'Blanco generico';
		this.velocidad= 0;
	}

	public setColor(color: string){
		this.color = color;
	}
	
	public getColor():string{
		return this.color;
	}
	
	public acelerar(){
		this.velocidad++;
	}

	public frenar(){
		this.velocidad--;
	}

	public setVelocidad(velocidad){
		this.velocidad = velocidad;
	}

	
	public getVelocidad():number{
		return this.velocidad;
	}

	public setModelo(modelo:string){
		this.modelo = modelo;
	}

	public getModelo():string{
		return this.modelo;
	}

/*VISIBILIDAD
Recordemos que tenemos 3 modificadores de acceso.
PRIVATE- Nos permitirá usar el metodo o atributo solo dentro de la clase que 
lo define.
PROTECTED- Nos permitirá usar el metodo o atributo desde la clase que lo
define y tambien desde dentro  de otra clase que herede de esta
PUBLIC- Nos permitirá usar el metodo o atributo desde cualquier parte
*/
}

var coche1 = new Coche();

coche1.setColor('Azulito');

coche1.setVelocidad(200);

console.log('El color del coche 1 es: '+coche1.getColor());

console.log(coche1);

coche1.acelerar();
coche1.acelerar();

console.log('La velocidad del coche 1 es :'+coche1.getVelocidad());

coche1.frenar();

console.log('La velocidad del coche 1 tras frenar es :'+coche1.getVelocidad());

console.log(coche1);

/*
var coche2 = new Coche();
coche2.setColor('verde');

console.log('El color del coche 2 es: '+coche2.getColor());

var coche3 = new Coche();
coche3.setColor('rojo');

console.log('El color del coche 3 es: '+coche3.getColor());
*/
