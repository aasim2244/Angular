import { RouterModule, Routes } from '@angular/router';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { FirstNavbarComponent } from './first-navbar/first-navbar.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntraPageComponent } from './intra-page/intra-page.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { AppServerComponent } from './app-server/app-server.component';
import { AppS3Component } from './app-s3/app-s3.component';
import { UnrelatedComponent } from './unrelated/unrelated.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { SameHTMLComponent } from './same-html/same-html.component';

export const routes: Routes = [
    { path: '', component: FirstNavbarComponent, children: [
        {
          path: 'table', // child route path
          component: TableComponent, // child route component that the router renders
        },
        {
          path: 'form',
          component: FormComponent, // another child route component that the router renders
        },
        {
          path: 'same-html',
          component: SameHTMLComponent
        },
        {
          path: 'intra',
          component: IntraPageComponent
        },
        {
          path: 'parent-child',
          component: ParentChildComponent
        },
        {
          path: 'siblings',
          component: SiblingsComponent
        },
        {
          path: 'unrelated',
          component: UnrelatedComponent
        },
        {
          path: 'app-s3',
          component: AppS3Component
        },
        {
          path: 'app-server',
          component: AppServerComponent 
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