import { Routes } from '@angular/router';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { FirstNavbarComponent } from './first-navbar/first-navbar.component';

export const routes: Routes = [
    { path: '', component: FirstNavbarComponent },
    { path: 'second', component: SecondNavbarComponent }
];
