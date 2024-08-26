import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [MatInput, MatFormField, MatLabel, MatButtonModule],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent implements 
  OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
  @Input('test')
  testVar: string;

  counter: number = 0;


  ngOnInit(): void {
    // console.log("in ngOnInit: ", this.counter);
    // this.counter++;
  }
  ngDoCheck(): void {
    // console.log("in ngDoCheck: ", this.counter);
    // this.counter++;
  }
  ngAfterContentInit(): void {
    // console.log("in ngAfterContentInit: ", this.counter);
    // this.counter++;
  }
  ngAfterContentChecked(): void {
    // console.log("in ngAfterContentChecked: ", this.counter);
    // this.counter++;
  }
  ngAfterViewInit(): void {
    // console.log("in ngAfterViewInit: ", this.counter);
    // this.counter++;
  }
  ngAfterViewChecked(): void {
    // console.log("in ngAfterViewChecked: ", this.counter);
    // this.counter++;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("in ngOnChanges: ", this.counter);
    console.log("in ngOnChanges: ", this.testVar);
    this.counter++;
  }
  ngOnDestroy(): void {
    console.log("in ngOnDestroy: ", this.counter);
    this.counter++;
  }
}
