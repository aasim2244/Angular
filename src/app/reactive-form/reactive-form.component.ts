import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, MatFormField, MatInput,
    MatLabel, MatSelectModule, MatDatepickerModule,
    MatCheckboxModule, MatRadioModule, MatSlideToggleModule,
    MatSliderModule, MatButtonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  OnFormSubmit(){
    console.log('form submitted with data:');
  }

  inputKeyUp(){
    console.log('inputKeyUp called');
  }
}
