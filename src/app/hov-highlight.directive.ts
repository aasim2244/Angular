import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[HovHighlight]',
  standalone: true
})
export class HovHighlightDirective {
  
  //variable has to be same name as selector
  //and as a result, the @Input is empty
  //This is what the attribute/direcive will take in the tag
  @Input()
  HovHighlight: string = "";

  constructor(private element: ElementRef) {  }

  @HostListener('mouseenter')
  mouseEnterFunction(){
    this.highlight(this.HovHighlight);
  }
  
  @HostListener('mouseleave')
  mouseLeaveFunction(){
    this.highlight('');//returns to normal color of text

  }

  private highlight(color: string){
    this.element.nativeElement.style.color = color;
  }
}
