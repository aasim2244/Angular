import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-template-reference-variable',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.css'
})
export class TemplateReferenceVariableComponent {
}
