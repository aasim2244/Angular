import { ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intra-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './intra-page.component.html',
  styleUrl: './intra-page.component.css'
})
export class IntraPageComponent {
  
  //this is how html template variables get saved in ts
  @ViewChild('textVar') 
  textVarTs: ElementRef;

  //this variable is a placeholder to have value transferred
  //and then shown in the html either via ngmodel or interpolation
  modelVar: string;

  show() {
    console.log(this.textVarTs.nativeElement.value);
    this.modelVar = this.textVarTs.nativeElement.value
  }

  reveal() {
    console.log(this.modelVar);
  }
}
