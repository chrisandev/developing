import{Camiseta} from './camiseta';


class Main{
	constructor(){
		console.log('Aplicación JS cargada!!');
	}

	getCamiseta(){
		return new Camiseta('Rojo', 'fasdsa', 'dassa', 'affd', 21);
	}
}

var main = new Main();