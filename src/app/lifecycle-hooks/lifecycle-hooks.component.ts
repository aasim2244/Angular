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
export class LifecycleHooksComponent {
  
  counter: number = 0;

  // ngOnChanges(changes: SimpleChanges): void {
  //   this"1. ngOnChanges: called when @Input() recieved";
  // }

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
  ngOnDestroy(): void {
    console.log("in ngOnDestroy: ", this.counter);
    this.counter++;
  }
}
