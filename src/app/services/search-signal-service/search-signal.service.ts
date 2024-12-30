import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchSignalService {
  searchValue = signal("");
  
  SendValue(value: string){
    this.searchValue.update(() => value);
  }
}
