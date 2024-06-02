import { Routes } from '@angular/router';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { FirstNavbarComponent } from './first-navbar/first-navbar.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: '', component: FirstNavbarComponent },
    { path: 'second', component: SecondNavbarComponent },
    { path: 'table', component: TableComponent, outlet:'navbar2' },
    { path: 'form', component: FormComponent, outlet:'navbar2' }
    
];
