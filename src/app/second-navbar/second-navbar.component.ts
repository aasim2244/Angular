import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { SearchService } from '../search-service/search-service.component';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-second-navbar',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, 
    MatButtonModule, MatMenuModule, RouterModule, MatFormField, 
    MatLabel, SearchService, MatInputModule],
  templateUrl: './second-navbar.component.html',
  styleUrl: './second-navbar.component.css'
})
export class SecondNavbarComponent {
  value: string = '';
  
  constructor(private searchService: SearchService){
  }

  setValue(e: any){
    this.value = e.target.value; 
    this.searchService.SendValue(this.value);
  }
}
