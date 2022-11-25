export class ContactoUsuario{
/*Creamos una clase molde o de modelo para un componente*/
	constructor(
		/*Se declaran las propiedades como parametro en el constructor y ya se inicializaran
		usandolas en el componente*/
		public nombre: string,
		public apellidos: string,
		public email: string,
		public mensaje: string 
	){ }

}