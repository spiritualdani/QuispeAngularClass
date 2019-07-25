import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMensaje]'
})
export class MensajeDirective {

  constructor(private element: ElementRef) {}
    @HostListener('mouseenter')
    public onMouseEnter(){
      this.element.nativeElement.style.backgroundColor="green";
    
    }
    @HostListener('mouseleave')
    public onMouseLeave(){
      this.element.nativeElement.style.backgroundColor="white";
    }
}
