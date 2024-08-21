import {Component, Input } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent{

  //expecting to input this property on child tag
  @Input('childVariableThatAcceptsParentValue')
  childVariable: string;
}
