import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
    public nombre: string;
    public followers: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    ){
    this.nombre = "";
    this.followers = 0;
    }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
/*Nos subscribimos para recoger los parametros con  un callback, y luego con esos parametros 
hacemos lo que queramos*/
      this.nombre = params['nombre']; //es  params nombre por que le hemos llamado asi en 
      //el routing
      this.followers = params['followers'];

      console.log(this.nombre);
      console.log(typeof +params['followers']); 
      /*Params da los parametros en tipo string, para parsearlo a number por ejemplo,
      deberemos de hacer este typeof con el + delante de params*/

      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }
    });
  }
  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}