import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-second-navbar',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, RouterModule],
  templateUrl: './second-navbar.component.html',
  styleUrl: './second-navbar.component.css'
})
export class SecondNavbarComponent {

}
