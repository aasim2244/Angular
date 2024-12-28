import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { UsdToCadPipe } from '../../pipes/usd-to-cad.pipe';
@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule,
    UsdToCadPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

}
