import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Para peticiones
import { Observable } from 'rxjs'; //para la recogida de datos de las peticiones 
//en la url

@Injectable() //Injectable es para los servicios, no para una clase molde tipica
export class PeticionesService{
	public url: string; //Guardamos la url principal de la API rest

	constructor(
		public _http: HttpClient /*Necesitamos un objeto de tipo HttpClient para poder
		usar las funcionalidades de esta  libreria, como el get, post, etc.
		Se recoge como parametro en el constructor
		*/
		){

		this.url = "https://reqres.in/";
		}


	getUser(userId: any): Observable<any>{ 
		/*Creamos un metodo para obtener un user con un get de una api con el tipo de 
		retorno observable de cualquier tipo, es asi para los metodos de peticiones */
		return this._http.get(this.url+'api/users/' + userId);
		/*Indicamos que esto es un servicio http de tipo get y luego le decimos que obtenemos
		nuestra url declarada + el path especidico para obtener la info de ese user*/
	}

/*Asi se hace un metodo AJAX de tipo  post con angular usando la libreria o modulo http*/
	addUser(user: any): Observable<any>{ //Siempre devuelven un observable
		let params= JSON.stringify(user);/*Los params son los datos que queremos añadir
		en el post a la API, como ya sabemos hay que pasarlos a JSON, al igual que en JS*/
		let headers = new HttpHeaders().set('content-type', 'application/json');
		/*Hay que crear unos headers que no se lo que son, a la variable la podemos llamar
		como queramos pero siempre es asi-*/

		return this._http.post(this.url+'api/users', params, {headers: headers});
		/*Y para finalizar devolvemos este post( con la url base de la api + la  ruta de los 
		users + nuestros datos pasados a json + los headers: con nuestra variable de los headers
		que en este caso tambien ha sido llamada headers*/
	}



}