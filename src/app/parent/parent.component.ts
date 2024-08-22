import { AfterContentChecked, AfterContentInit, AfterRenderPhase, AfterRenderRef, AfterViewInit, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild('textVar')
  textVarModelVariable: ElementRef;

  getDataFromChild(param: any){
    console.log('recieved in parent: ' + param);
    this.textVarModelVariable.nativeElement.value = param;
  }
}
