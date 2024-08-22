import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  sendInputValue: EventEmitter<string> = new EventEmitter<string>();

  sendInputFunction(value: string){
    this.sendInputValue.emit(value);
  }
}
