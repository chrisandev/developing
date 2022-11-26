import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {

   }

   ngOnInit(){

    var element = this.el.nativeElement;
    element.style.background = 'blue';
    element.style.color = 'white';
    element.style.padding = '20px';
    element.style.marginTop = '20px';

    console.log(element.innerText);
    element.innerText = element.innerText.toUpperCase().replace('CONTACTO', '/////');




   }



}

