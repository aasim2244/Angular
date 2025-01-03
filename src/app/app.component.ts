import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { FirstNavbarComponent } from './components/first-navbar/first-navbar.component';
import { TableComponent } from './components/table/table.component';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, 
    FirstNavbarComponent, RouterModule, 
    MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule,
    MatInputModule, TableComponent, MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  @Input() toggleStepper: boolean = false;
}
