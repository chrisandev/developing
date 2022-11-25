import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;
  public usuario_guardado: any;

  public new_user: any;

  constructor( /*Declaramos por parametro un servicio del tipo de nuestro servicio, lo podemos
    llamar como queramos, pero por temas de buenas practicas pues igual en camel case y con _ 
    delante para que se vea que es un servicio, de este modo podemos hacer uso de la herencia
    de ese servicio, metodos, etc*/
    private _peticionesService: PeticionesService
    ){ 
    this.userId= 1; //por defecto que sea 1
    this.new_user = {
      "name": "",
      "job": ""
    }

    }

  ngOnInit(): void {
    this.cargaUsuario();
    this.fecha = new Date();
  }

  cargaUsuario(){
      this._peticionesService.getUser(this.userId).subscribe( //Subscribe es para obtener los datos 
        result => { //Esto siempre nos da un result y un error que se procesan con callbacks
          console.log(result);
          this.user = result.data;
        },
        error => {
          console.log(<any>error);
        }
      );
  }

  onSubmit(form: any){ //newUser: any
    this._peticionesService.addUser(this.new_user).subscribe(
      response=>{
        this.usuario_guardado = response; //Response = Todos los datos metidos en el form 
        console.log(this.usuario_guardado);
        form.reset();
      },
      error =>{
        console.log(<any>error);
      }
      );
  }

}
