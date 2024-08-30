import { Component, NgZone, ViewChild, Pipe } from '@angular/core';

@Component({
  selector: 'app-zones',
  standalone: true,
  imports: [],
  templateUrl: './zones.component.html',
  styleUrl: './zones.component.css'
})
export class ZonesComponent {
  @ViewChild('element')
  element: any;
  
  position: any;

  constructor(private zone: NgZone){}

  mouseDown(event: any): void{
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener('mousemove', 
        this.mouseMove.bind(this));
    });
  }

  mouseUp(event: any): void{
    this.zone.run(() => {
      this.position = {
        x: this.element.nativeElement.getAttribute('x'),
        y: this.element.nativeElement.getAttribute('y'),
      }
    });

    window.document.removeEventListener('mousemove', this.mouseMove);
  }

  mouseMove(event: any): void{
    this.element.nativeElement.setAttribute('x', event.clientX);
    this.element.nativeElement.setAttribute('y', event.clientY);
  }
}
