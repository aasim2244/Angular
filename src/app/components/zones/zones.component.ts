import { Component, NgZone, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zones.component.html',
  styleUrl: './zones.component.css'
})
export class ZonesComponent {
  @ViewChild('element')
  element: any;
  
  position: any;

  constructor(private zone: NgZone){}

  mouseEnter(event: any): void{
    //this code specifies logic that runs outside angular
    //and doesnt trigger angular changes
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener('mousemove', 
        this.mouseMove.bind(this));
    });
  }

  //since this code runs inside of angular, the view only gets updated
  //once you move outside of box
  mouseLeave(event: any): void{
    this.zone.run(() => {
      this.position = {
        x: this.element.nativeElement.getAttribute('x'),
        y: this.element.nativeElement.getAttribute('y'),
      };
    });

    window.document.removeEventListener('mousemove', this.mouseMove);
  }

  //this entire funcion runs outside of angular
  mouseMove(event: any): void{
    this.element.nativeElement.setAttribute('x', event.clientX);
    this.element.nativeElement.setAttribute('y', event.clientY);
  }
}
