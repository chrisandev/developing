import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identificado: boolean;
  constructor() {

    this.identificado = true;
   }

  ngOnInit(): void {
  }

  unsetIdentificacion(){
    this.identificado = false;
  }

  setIdentificacion(){
    this.identificado = true;
  }

}
