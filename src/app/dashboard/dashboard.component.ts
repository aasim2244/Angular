import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatGridListModule, NgIf, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isVisibile: boolean = false;

  dashboards = ['one', 'two', 'three', 'four'];
}
