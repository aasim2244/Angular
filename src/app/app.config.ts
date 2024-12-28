import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SearchService } from './services/search-service/search-service.component';
import { NgModel } from '@angular/forms';
import { SiblingService } from './services/sibling-service/sibling.service';
import { SearchSubjectService } from './services/search-subject-service/search-subject.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), 
    SearchService, SiblingService, SearchSubjectService]
    

};
