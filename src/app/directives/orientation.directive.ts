import { AfterContentInit, AfterViewInit, Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[Orientation]',
  standalone: true
})
export class OrientationDirective implements AfterContentInit{

  @Input()
  Orientation;
  
  constructor(private element : ElementRef) { 
    
  }

  @HostBinding('style.display')
  display: string;

  ngAfterContentInit(): void {
    if(this.Orientation == 'H')
      this.display = "block";
    else if(this.Orientation == 'V')
      this.display = "table-caption";
  }

}
