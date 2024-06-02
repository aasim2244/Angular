import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-first-navbar',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, 
    RouterModule],
  templateUrl: './first-navbar.component.html',
  styleUrl: './first-navbar.component.css'
})
export class FirstNavbarComponent {
  @Output() onPlusClick = new EventEmitter<boolean>();

  plusClick() {
    this.onPlusClick.emit(true);
    console.log('emit is: ', this.onPlusClick.subscribe());
  }
}
