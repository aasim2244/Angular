import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-first-navbar',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, 
    RouterModule, MatFormField, MatLabel, MatInputModule],
  templateUrl: './first-navbar.component.html',
  styleUrl: './first-navbar.component.css'
})
export class FirstNavbarComponent {

  value: string = '';
  
  setValue(e: any){
    this.value = e.target.value; 
    console.log(this.value);
  }
}
