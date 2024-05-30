import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { SecondNavbarComponent } from '../app/second-navbar/second-navbar.component';
import { FirstNavbarComponent } from './first-navbar/first-navbar.component';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1},
  {position: 2},
  {position: 3},
  {position: 4},
  {position: 5},
  {position: 6},
  {position: 7},
  {position: 8},
  {position: 9},
  {position: 10}
];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, 
    FirstNavbarComponent, SecondNavbarComponent, RouterModule, 
    MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  displayedColumns: string[] = ['position'];
  dataSource = ELEMENT_DATA;
}
