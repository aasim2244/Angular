import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-intra-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './intra-page.component.html',
  styleUrl: './intra-page.component.css'
})
export class IntraPageComponent {

}
