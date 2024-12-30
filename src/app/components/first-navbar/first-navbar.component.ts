import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SearchSignalService } from '../../services/search-signal-service/search-signal.service';

@Component({
  selector: 'app-first-navbar',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, 
    RouterModule, MatFormField, MatLabel, MatInputModule],
  templateUrl: './first-navbar.component.html',
  styleUrl: './first-navbar.component.css'
})
export class FirstNavbarComponent implements AfterViewInit{
  @ViewChild('searchBar')
  searchBar: ElementRef;

  value: string = '';
  
  constructor(private searchSignalService: SearchSignalService){
  }
  ngAfterViewInit(): void {
    this.setValue(this.searchBar.nativeElement.value);
  }

  setValue(e: any){
    this.value = e.target.value; 
    this.searchSignalService.SendValue(this.value);
  }
}
