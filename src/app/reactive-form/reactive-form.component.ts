import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
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
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatFormField, MatInput,
    MatLabel, MatSelectModule, MatDatepickerModule,
    MatCheckboxModule, MatRadioModule, MatSlideToggleModule,
    MatSliderModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  reactiveForm: FormGroup;

  constructor(){
    this.reactiveForm = new FormGroup({

      //sets the default values for the form
      inputTextControl: new FormControl(null),
      selectDropdownControl: new FormControl('opt1'),
      datePickerInputControl: new FormControl(null),
      checkboxControl: new FormControl(null),
      radioGroupControl: new FormControl('1'),
      toggleControl: new FormControl(null),
      sliderControl: new FormControl(50)
    });
  }

  OnFormSubmit(){
    console.log('form submitted with data:');
  }

  inputKeyUp(){
    console.log('inputKeyUp called');
  }
}
