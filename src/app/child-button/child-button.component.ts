import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'child-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './child-button.component.html',
  styleUrl: './child-button.component.css'
})
export class ChildButtonComponent {

  @Input()
  isDisabled: boolean = true;

  @Output()
  childEmitter = new EventEmitter<string>;

  setChildFilter(){
    this.childEmitter.emit('lando');
  }
}
