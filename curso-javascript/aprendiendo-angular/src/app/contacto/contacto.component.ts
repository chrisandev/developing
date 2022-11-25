import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public usuario: ContactoUsuario; //Declaras un objeto de la clase molde para poder instanciar
  //public show_data: any;

  constructor() {
  this.usuario = new ContactoUsuario('','','',''); //inicializamos el nuevo objeto
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('evento submit lanzado');
    //this.show_data = this.usuario;
    console.log(this.usuario);
  }

}
