import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
@Component({
  selector: 'app-template-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatFormField, MatInput,
    MatLabel, MatSelectModule, MatDatepickerModule,
    MatCheckboxModule, MatRadioModule, MatSlideToggleModule,
    MatSliderModule
  ],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})

export class TemplateFormComponent {

  inputKeyUp(param: any){
    console.log(param);
  }

}
