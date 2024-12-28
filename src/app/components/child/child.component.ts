import {AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent implements AfterContentInit{

  //expecting to input this property on child tag
  @Input('childVariableThatAcceptsParentValue')
  childVariable: string;

  @Output()
  childVariableThatSendsToParent = new EventEmitter<string>();

  //this gets whatever was passed in from parent as ng-content
  //if more than one tag passed in, use @ContentChildren
  @ContentChild('ngContent')
  ngContentVar: ElementRef;

  ngAfterContentInit(): void {
    console.log(this.ngContentVar);
    this.ngContentVar.nativeElement.style = "background-color: red;"
  }

  sendDataToParent(test: any){
    console.log(test.target.value);
    this.childVariableThatSendsToParent.emit(test.target.value);
  }

}
