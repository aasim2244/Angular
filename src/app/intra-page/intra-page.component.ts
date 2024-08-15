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
  @ViewChild('inputVarOne') 
  inputVarTs1: ElementRef;

  @ViewChild('inputVarTwo') 
  inputVarTs2: ElementRef;

  //this variable is a placeholder to have value transferred
  //and then shown in the html either via ngmodel or interpolation
  textVarTsValue: string;

  show() {
    this.textVarTsValue = this.inputVarTs1.nativeElement.value;
    // this.inputVarTs2.nativeElement.disabled = true;
    this.inputVarTs2.nativeElement.placeholder = "disabled";
    this.inputVarTs2.nativeElement.style="background-color: red";
   
    //trying to get events assigned from backend
    // this.inputVarTs2.nativeElement.click() +=this.test();
    
  }

  test(){
    this.inputVarTs2.nativeElement.style="background-color: green";
  }
}
