import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project'; 
import { Global } from './global';

/*
// Configurar cabeceras y cors (Esto tb es un middleware!)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
*/

@Injectable()
export class ProjectService{
	public url: string;


	constructor(
		private _http: HttpClient /*Para los metodos del protocolo http*/
	){
		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio de Angular';
	}

	saveProject(project: Project): Observable<any>{ /*Guardaremos un nuevo proyecto a traves del form a nuestra BBDD*/
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url + 'save-project', params, {headers: headers});
		/*En el return al final le pasamos un objeto headers con el valor de nuestra variable
		headers*/
	}

	getProjects(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'projects', {headers: headers});
	}

	getProject(id: any): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'project/'+id, {headers: headers});
	}

	deleteProject(id:any): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.delete(this.url+'project/'+id, {headers: headers});
	}

	updateProject(project: any): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.put(this.url+'project/'+ project._id, params, {headers: headers});

	}
}