import { ElementRef, QueryList, ViewChildren } from '@angular/core';
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
  
  //this is how html template variables 
  //get saved in the backend tsfile
  @ViewChild('inputVarOne') 
  inputVarTs1: ElementRef;

  @ViewChild('inputVarFour') 
  inputVarTs4: ElementRef;

  //gets all childnodes from assigned tag reference variable
  @ViewChildren('parent')
  parentTs: QueryList<ElementRef>;

  //this variable is a placeholder to have value transferred
  //and then shown in the html either via ngmodel or interpolation
  textVarTsValue: string;

  inputVarOneKeyUp() {
    this.textVarTsValue = this.inputVarTs1.nativeElement.value;
  
    console.log(this.parentTs.first.nativeElement);
    this.parentTs.first.nativeElement.style = "background-color: aliceblue";

    this.inputVarTs4.nativeElement.placeholder = "disabled";
    this.inputVarTs4.nativeElement.style="background-color: orangered";
    this.inputVarTs4.nativeElement.onclick = () => this.changeTemplateUsingViewChild();
  }

  changeTemplateUsingViewChild(){
    this.inputVarTs4.nativeElement.placeholder = "enabled";
    this.inputVarTs4.nativeElement.style="background-color: lightgreen";
  }
}
