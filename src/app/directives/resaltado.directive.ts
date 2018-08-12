import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltadoColor') nuevoColor: string;

  constructor(private el: ElementRef) {
    console.log('directiva llamada 1');
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('directiva llamada 2');
    console.log(this.nuevoColor);
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('directiva llamada 3');
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  @HostListener('mousedown') onMouseDown() {
    console.log('directiva llamada 3');
    this.el.nativeElement.style.backgroundColor = this.nuevoColor;
  }

  @HostListener('mouseup') onMouseUp() {
    console.log('directiva llamada 3');
    this.el.nativeElement.style.backgroundColor = 'green';
  }
}
