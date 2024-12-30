import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { SiblingService } from '../../services/sibling-service/sibling.service';

@Component({
  selector: 'app-sibling-two',
  standalone: true,
  imports: [MatFormField, MatInput, MatLabel],
  templateUrl: './sibling-two.component.html',
  styleUrl: './sibling-two.component.css'
})

export class SiblingTwoComponent implements AfterViewInit{
  siblingServiceConsumer = inject(SiblingService);
  
  @ViewChild('textVar')
  textVarTs: ElementRef;

  constructor(private siblingService:SiblingService){}

  ngAfterViewInit(){
    this.textVarTs.nativeElement.onkeyup = 
    () => this.textVarKeyUp();
    this.siblingServiceConsumer.sendInputValue.subscribe((value: string) => {
      this.textVarTs.nativeElement.placeholder = value;
    });
  }

  textVarKeyUp(){
    let value = this.textVarTs.nativeElement.value;
    console.log('second text: ' + value);
    this.siblingService.sendInputValue.emit(value);
  }
}
