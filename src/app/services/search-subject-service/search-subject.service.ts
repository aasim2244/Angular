import {Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchSubjectService {
  // SendValueEvent: EventEmitter<string> = new EventEmitter<string>();
  
  SendValueEvent = new Subject<string>();

  SendValue(value: string){
    this.SendValueEvent.next(value);
  }
}
