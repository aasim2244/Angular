import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-annotation-selections',
  standalone: true,
  imports: [MatRadioButton, MatLabel, MatRadioGroup],
  templateUrl: './annotation-selections.component.html',
  styleUrl: './annotation-selections.component.css'
})
export class AnnotationSelectionsComponent{
  value: any;
  list = [1,2,3];

  handleRadioClick(event: any): void{
    this.value = event.value;
  }
}
