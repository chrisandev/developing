import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

//declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  /*@Input() etiquetas: boolean;  asi seria la manera standart de meter un decoracorador
  pero si queremos darle un nuevo  nombre para la propiedad en el hijo la podemos renombrar del
  siguiente modo.*/
  @Input('etiquetas') captions: boolean; /*Asi la llamamos captions en vez de etiquetas que era su 
  nombre en el padre*/
  @Output() conseguirAutor = new EventEmitter(); /*Con este objeto puedo crear nuevos eventos de tipo
  output, hacia el padre*/

  public autor: any;

  constructor() { 

    this.anchura = 0;
    this.captions = false;

    this.autor = {
      nombre: "Christian Sánchez",
      web: "christiansanchezweb.es",
      youtube: "Christian Sánchez WEB"
    };

  }

  ngOnInit(): void {

/*
Prueba con JQuery para ver que funciona

    $('#logo').click(function(e) {
      e.preventDefault();

       $("header").css("background","green")
                     .css("height","50px");
    });
  */
    (<any>$('.gallery')).bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.anchura
  });

  }

  lanzar(event: any){
    console.log(event);
    this.conseguirAutor.emit(this.autor); //Utilizo el metodo emit para enviar mi objeto autor
  }

}
