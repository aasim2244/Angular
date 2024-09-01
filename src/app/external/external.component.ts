import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { from, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-external',
  standalone: true,
  imports: [MatFormField, MatInput, MatLabel, CommonModule],
  templateUrl: './external.component.html',
  styleUrl: './external.component.css'
})
export class ExternalComponent implements OnInit{
  @ViewChild('textVar')
  urlTextBox: ElementRef;
  stream: Observable<number>;
  result: any;

  ngOnInit(): void {
    // this.urlTextBox.nativeElement.
    const url: string = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
    const data = from(fetch(url));
    data.subscribe(
      (response) => {
        console.log(response)
        this.result = response.formData();
      }
    );
    // this.CreateObservable();
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
