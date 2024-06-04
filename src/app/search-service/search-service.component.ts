import { Component, EventEmitter, Injectable } from '@angular/core';

@Component({
  selector: 'app-search-service',
  standalone: true,
  imports: [],
  templateUrl: './search-service.component.html',
  styleUrl: './search-service.component.css'
})

@Injectable()
export class SearchServiceComponent {

  SendValueEvent: EventEmitter<string> = new EventEmitter<string>();

  SendValue(value: string){
    this.SendValueEvent.emit(value);
  }
}
