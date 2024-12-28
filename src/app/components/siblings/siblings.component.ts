import { Component } from '@angular/core';
import { SiblingOneComponent } from "../sibling-one/sibling-one.component";
import { SiblingTwoComponent } from "../sibling-two/sibling-two.component";

@Component({
  selector: 'app-siblings',
  standalone: true,
  imports: [SiblingOneComponent, SiblingTwoComponent],
  templateUrl: './siblings.component.html',
  styleUrl: './siblings.component.css'
})
export class SiblingsComponent {

}
