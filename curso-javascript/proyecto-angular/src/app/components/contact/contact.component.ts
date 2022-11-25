import { Component, OnInit, ViewChild } from '@angular/core';

/*declare var $:any; declare es un propiedad que actua a nivel global, asi todo el programa
reconocerá el $ de jquery, aunque de la forma en la que he instalado la libreria y la he configurado
no es necesario hacer este declare, como ya sabemos, hay multiples formas de lograr lo mismo
*/


/*El componente contact actuará como padre del componente slider, esto se puede verificar viendo
que el hijo tiene decoradores Input heredados de este componente*/



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public anchuraToSlider: number;
  public captions: boolean;
  public autor: any;
  /*ViewChilds o variables en el template de angular, con # asignamos algo a una variable con el nombre
  que pongamos, luego en el component, usamos el decorados para importarla y en este caso, indicamos
  que el viewchild textos la metemos en la propiedad o variable textos para usarla aqui*/
  @ViewChild('textos') textos:any; 

  constructor() { 

      this.widthSlider = 0;
      this.anchuraToSlider = 0;
      this.captions = false; 

  }

  ngOnInit(): void {

    /*alert(document.querySelector('#texto').innerHTML);  Esta es la forma del curso pero no 
    funciona*/
    var opcionClasica = <HTMLDivElement>document.querySelector('#texto');

    setTimeout(() => { /*Si no le pones un setTimeOut, intenta acceder antes de que esté y da error*/
    console.log(this.textos.nativeElement.textContent);
    }, 1000);
    /*si miramos el objeto por consola, dentro  de nativeElement/textContent es donde se encuentra
    el texto*/
    
    
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = 0; /*Ponerla a 0 o vaciar su anchura será lo mismo que resetearla y 
    nos permitirá volverle a setear una anchura, de otro modo no permite*/
  }

  getAutor(event:any){
    console.log(event);
    this.autor = event;
  }

}
