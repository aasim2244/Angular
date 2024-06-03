import { RouterModule, Routes } from '@angular/router';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { FirstNavbarComponent } from './first-navbar/first-navbar.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: FirstNavbarComponent, children: [
        {
          path: 'table', // child route path
          component: TableComponent, // child route component that the router renders
        },
        {
          path: 'form',
          component: FormComponent, // another child route component that the router renders
        }] 
    },
    { path: 'second', component: SecondNavbarComponent, children: [
        {
          path: 'table', // child route path
          component: TableComponent, // child route component that the router renders
        },
        {
          path: 'form',
          component: FormComponent, // another child route component that the router renders
        }]
    }
];