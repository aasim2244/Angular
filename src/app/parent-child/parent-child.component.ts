import { Component } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent-child',
  standalone: true,
  imports: [ParentComponent, ChildComponent],
  templateUrl: './parent-child.component.html',
  styleUrl: './parent-child.component.css'
})
export class ParentChildComponent {

}
