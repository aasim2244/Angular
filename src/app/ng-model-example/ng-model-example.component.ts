import { ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HovHighlightDirective } from '../hov-highlight.directive';
import { OrientationDirective } from '../orientation.directive';
@Component({
  selector: 'app-ng-model-example',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule,
    HovHighlightDirective, OrientationDirective
  ],
  templateUrl: './ng-model-example.component.html',
  styleUrl: './ng-model-example.component.css'
})
export class NgModelExampleComponent {
    
  //this is how html template variables 
  //get saved in the backend tsfile
  @ViewChild('inputVarOne') 
  inputVarTs1: ElementRef;

  @ViewChild('inputVarFour') 
  inputVarTs4: ElementRef;

  //this variable is a placeholder to have value transferred
  //and then shown in the html either via ngmodel or interpolation
  textVarTsValue: string;

  inputVarOneKeyUp() {
    this.textVarTsValue = this.inputVarTs1.nativeElement.value;
  }
}
