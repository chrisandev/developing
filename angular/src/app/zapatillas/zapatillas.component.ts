import {Component, OnInit} from '@angular/core'; 
import { Zapatilla } from '../models/zapatilla'; //Lo importamos en el componente que queramos
import { ZapatillaService } from '../services/zapatilla.service';


@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html',
	providers: [ZapatillaService] //en providers se injectan los servicios
})

export class ZapatillasComponent implements OnInit{
	public titulo: string;
	public zapatillas: Array<Zapatilla>;
	public marcas: string[];
	public color: string;
	public mi_marca: string;

	constructor( 
		private _zapatillaService: ZapatillaService /*Va a ser un objeto de ese tipo,
		normalmente los servicios siempre se declaran con _ delante*/
		){
		this.color= "yellow";
		this.mi_marca= "Fila";
		this.titulo = "Componente de zapatillas";
		this.marcas = new Array(); //Si no lo inicializamos luego da error en el metodo
		this.zapatillas = this._zapatillaService.getZapatillas();/*Aqui llamamos al metodo
		getZapatillas de nuestro  servicio*/
	}

	ngOnInit(){
		this.getMarcas();
		alert(this._zapatillaService.getTexto()); //Aqui llamamos a otro metodo del servicio
	};

	getMarcas(){
		this.zapatillas.forEach((zapatilla, index) =>{

	/*Para solo agregar valores unicos hacemos este if, tambien podriamos meterlo todo en un 
	objeto set, pero en este  ejemplo lo haremos asi, entonces si en el array de marcas, en su
	indice esa marca es menor que la posicion 0, es decir no existe, entonces hazle push de la 
	marca.
	*/
			if(this.marcas.indexOf(zapatilla.marca) < 0){
				this.marcas.push(zapatilla.marca);
			}

		});
		console.log("Estas es el resultado del array de marcas")
		console.log(this.marcas);
	}

	getMarca(){ /*Para el boton de mostrar el two way data binding*/
		alert(this.mi_marca);
	}

	addMarca(){
		this.marcas.push(this.mi_marca);
	}

	borrarMarca(index: any){
		//delete this.marcas[index]; Esto transforma el elemento a undefined pero no lo quita
		this.marcas.splice(index, 1);
	}

	onBlur(){
		console.log('Has salido del input');
	}

	mostrarPalabra(){
		alert(this.mi_marca);
	}

}