import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { SiblingService } from '../sibling.service';
@Component({
  selector: 'app-sibling-one',
  standalone: true,
  imports: [MatFormField, MatInput, MatLabel],
  templateUrl: './sibling-one.component.html',
  styleUrl: './sibling-one.component.css'
})
export class SiblingOneComponent implements AfterViewInit{

  @ViewChild('textVar')
  textVarTs: ElementRef;
  
  siblingServiceConsumer = inject(SiblingService);

  constructor(private siblingService: SiblingService){}

  ngAfterViewInit(){
    this.textVarTs.nativeElement.onkeyup = 
    () => this.textVarKeyUp();
    this.siblingServiceConsumer.sendInputValue.subscribe((value: string) => {
      this.textVarTs.nativeElement.placeholder = value;
    })
  }

  textVarKeyUp(){
    let value = this.textVarTs.nativeElement.value
    console.log(value);
    this.siblingService.sendInputFunction(value);
  }
}
