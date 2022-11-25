/*Como la subida de imagenes es algo muy especifico lo hacemos en un nuevo archivo*/
import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService{
	public url: string;

constructor(){
	this.url = Global.url;

}

makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
	return new Promise(function(resolve, reject){
		var formData:any = new FormData();
		var xhr = new XMLHttpRequest(); /*tipico objeto peticiones asincronas en JS
		como curiosidad xhr es un sinonimo de ajax*/

		for(var i = 0; i < files.length; i++){
			formData.append(name, files[i], files[i].name); /*Recorreme todos los ficheros que 
			vayan llegando, y adjuntamelos al formulario con el nombre*/
		}

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){ /*Esto son valores que funcionan asi y ya esta.. */
				if(xhr.status == 200){
					resolve(JSON.parse(xhr.response));
				}else{
					reject(xhr.response);
				}
			}
		}

		xhr.open('POST', url, true); 
		//xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		//xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
		xhr.send(formData);
	});

}


}