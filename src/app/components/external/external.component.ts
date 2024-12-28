import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { from, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-external',
  standalone: true,
  imports: [MatFormField, MatInput, MatLabel, CommonModule, HttpClientModule],
  templateUrl: './external.component.html',
  styleUrl: './external.component.css'
})
export class ExternalComponent implements OnInit{
  @ViewChild('textVar')
  urlTextBox: ElementRef;
  stream: Observable<number>;
  result: any;
  http: HttpClient = inject(HttpClient);

  
  
  ngOnInit(): void {
    const url: string = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
    this.http.get(url)
    .subscribe((response) => {
      this.result = response;
    });
    
  }

  CreateObservable(){
    this.stream = new Observable<number>((observer) => {
      try{
        observer.next(1);

        setInterval(() => {
          observer.next(2);
        }, 3000);

        setInterval(() => {
          observer.next(3);
        }, 6000);

      } catch(e){
        observer.error(e);
      }
    });
    
    this.stream.subscribe(data => {
      console.log(data);
      this.result = data;
    });
  }
}
