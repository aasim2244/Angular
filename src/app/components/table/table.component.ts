import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import { SearchSubjectService } from '../../services/search-subject-service/search-subject.service';
import { FormsModule } from '@angular/forms';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ChildButtonComponent } from '../child-button/child-button.component';

const tableData = [
  //property names have to be same as columns for sorting to work
  {number: 1, name: "Max Verstappen", team: "Red Bull"},
  {number: 2, name: "Logan Sargent", team: "Williams"},
  {number: 3, name: "Daniel Ricciardo", team: "RB"},
  {number: 4, name: "Lando Norris", team: "Mclaren"},
  {number: 10, name: "Pierre Gasly", team: "Alpine"},
  {number: 16, name: "Charles Leclerc", team: "Ferrari"},
  {number: 55, name: "Carlos Sainz", team: "Ferrari"},
  {number: 11, name: "Sergio Perez", team: "Red Bull"},
  {number: 81, name: "Oscar Piastari", team: "Mclaren"},
  {number: 63, name: "George Russell", team: "Mercedes"},
  {number: 44, name: "Lewis Hamilton", team: "Mercedes"},
  {number: 14, name: "Fernando Alonso", team: "Aston Martin"},
  {number: 22, name: "Yuki Tsunoda", team: "RB"},
  {number: 18, name: "Lance Stroll", team: "Aston Martin"},
  {number: 27, name: "Nico Hulkenberg", team: "Haas"},
  {number: 23, name: "Alex Albon", team: "Williams"},
  {number: 77, name: "Valteri Bottas", team: "Alfa Romeo"},
  {number: 31, name: "Esteban Ocon", team: "Alpine"},
  {number: 24, name: "Gyanu Zhou", team: "Alfa Romeo"},
  {number: 20, name: "Kevin Magnusen", team: "Haas"}
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, 
    RouterModule, MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule,
    MatInputModule, FormsModule, ChildButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit, AfterViewInit{
  columns: string[] = ['number', 'name', 'team'];

  //need to set datasource as an object of class MatTableDataSource
  //this makes sorting work
  dataSource = new MatTableDataSource(tableData);
  searchService = inject(SearchSubjectService);

  @ViewChild(MatSort) 
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  filterValue: string = "";
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.searchService.SendValueEvent.subscribe((value: string) => {
      this.dataSource.filter = value;
      this.filterValue = value;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  consumeChildEmitter(event: string){
    this.filterValue = event;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
}

@Component({
  selector: 'app-table-popup',
  templateUrl: 'table-popup.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogElementsExampleDialog {}
