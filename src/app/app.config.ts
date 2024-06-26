import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SearchService } from './search-service/search-service.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideAnimationsAsync(), SearchService]

};
