import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { SecondNavbarComponent } from '../app/second-navbar/second-navbar.component';
import { FirstNavbarComponent } from './first-navbar/first-navbar.component';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';

export interface Driver {
  driverNumber: number;
  driverName: string;
  teamName: string;
}

const tableData: Driver[] = [
  {driverNumber: 1, driverName: "Max Verstappen", teamName: "Red Bull"},
  {driverNumber: 2, driverName: "Logan Sargent", teamName: "Williams"},
  {driverNumber: 3, driverName: "Daniel Ricciardo", teamName: "RB"},
  {driverNumber: 4, driverName: "Lando Norris", teamName: "Mclaren"},
  {driverNumber: 16, driverName: "Pierre Gasly", teamName: "Alpine"},
  {driverNumber: 16, driverName: "Charles Leclerc", teamName: "Ferrari"},
  {driverNumber: 55, driverName: "Carlos Sainz", teamName: "Ferrari"},
  {driverNumber: 11, driverName: "Sergio Perez", teamName: "Red Bull"},
  {driverNumber: 81, driverName: "Oscar Piastari", teamName: "Mclaren"},
  {driverNumber: 63, driverName: "George Russell", teamName: "Mercedes"},
  {driverNumber: 44, driverName: "Lewis Hamilton", teamName: "Mercedes"},
  {driverNumber: 14, driverName: "Fernando Alonso", teamName: "Aston Martin"},
  {driverNumber: 22, driverName: "Yuki Tsunoda", teamName: "RB"},
  {driverNumber: 18, driverName: "Lance Stroll", teamName: "Aston Martin"},
  {driverNumber: 27, driverName: "Nico Hulkenberg", teamName: "Haas"},
  {driverNumber: 23, driverName: "Alex Albon", teamName: "Williams"},
  {driverNumber: 77, driverName: "Valteri Bottas", teamName: "Alfa Romeo"},
  {driverNumber: 31, driverName: "Esteban Ocon", teamName: "Alpine"},
  {driverNumber: 24, driverName: "Gyanu Zhou", teamName: "Alfa Romeo"},
  {driverNumber: 20, driverName: "Kevin Magnusen", teamName: "Haas"}
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, 
    FirstNavbarComponent, SecondNavbarComponent, RouterModule, 
    MatTableModule, MatSortModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
  columns: string[] = ['Number', 'Name', 'Team'];
  dataSource: MatTableDataSource<Driver>;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(tableData);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
