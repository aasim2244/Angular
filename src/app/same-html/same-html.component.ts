import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-same-html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './same-html.component.html',
  styleUrl: './same-html.component.css'
})
export class SameHTMLComponent {
}
